
const REQUEST_APP_URL ='https://trackly-beta.vercel.app';

(function(){
    function generateID(){
        return Date.now().toString(36)+Math.random().toString().substring(2, 9);
    };
     const session_duration = 30*60*1000;
    let visitorId = localStorage.getItem('Trackly_Visitor_Id');
    let sessionTime = Number(localStorage.getItem('Trackly_Session_Time'));
    const now = Date.now();              
    if(!visitorId || (now-sessionTime) >session_duration){
        if(visitorId){
            localStorage.removeItem('Trackly_Visitor_Id');
            localStorage.removeItem('Trackly_Session_Time');
        }
         visitorId = generateID();
        localStorage.setItem('Trackly_Visitor_Id', visitorId);
        localStorage.setItem('Trackly_Session_Time', now);
    };

    const script = document.currentScript;
    const websiteId = script.getAttribute('data-website-id');
    const domain = script.getAttribute('data-domain');
    
    // Get the Entry point
    const entryTime = Math.floor(Date.now()/1000)
   // Get Refrerr
   const referrer = document?.referrer || 'Direct';
    // UTM sources
       const urlParams = new URLSearchParams(window.location.search);
       const utm_source = urlParams.get('utm_source') || '';
       const utm_media = urlParams.get('utm_media')|| '';
       const utm_campaign = urlParams.get('utm_campaign')|| '';
       const refParams = window.location.href.split('?')[1] || '';
    const data = {type: "entry",websiteId,domain,entryTime, referrer, url:window.location.href, visitorId, urlParams, utm_source, utm_media, utm_campaign, refParams};
    fetch(`${REQUEST_APP_URL}/api/track`, {
        method: 'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(data)
    });
 

    // Active Time Tracking
    let activeStartTime = Math.floor(Date.now()/1000)
    let totalActiveTime = 0;

    // To handle Tab switching
    document.addEventListener("visibilitychange", () => {
    const now = Math.floor(Date.now()/1000);
    if (document.hidden) {
        totalActiveTime += now - activeStartTime;
    } else {
        activeStartTime = now;
    }
});

    const handleExit = ()=>{
        const exitTime = Math.floor(Date.now()/1000);
        totalActiveTime += Math.floor(Date.now()/1000)-activeStartTime;
          fetch(`${REQUEST_APP_URL}/api/track`, {
            keepalive: true,
        method: 'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify({type:"exit", websiteId,domain,exitTime, totalActiveTime, visitorId, exitUrl : window.location.href})
    });
    
    }

    // Whenever the User Closes the Window
    window.addEventListener('beforeunload',handleExit);
    //Live User Tracking
    const sendLivePing = ()=>{
        fetch(`${REQUEST_APP_URL}/api/live`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                visitorId,
                websiteId,
                last_seen:Date.now().toString(),
                url:window.location.href
            })
        })
    }
    sendLivePing(); // Send initial ping immediately
    setInterval(sendLivePing, 10000);
})();