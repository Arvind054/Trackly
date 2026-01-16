
(function(){
    function generateID(){
        return Date.now().toString(36)+Math.random().toString().substring(2, 9);
    };
     const session_duration = 12*60*60*1000;
    let visitorId = localStorage.getItem('Trackly_Visitor_Id');
    let sessionTime = localStorage.getItem('Trackly_Session_Time');
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
       const utm_source = urlParams.get('utm-source') || '';
       const utm_media = urlParams.get('utm_media')|| '';
       const utm_campaign = urlParams.get('utm_campaign')|| '';
       const refParams = window.location.href.split('?')[1] || '';
    const data = {type: "entry",websiteId,domain,entryTime, referrer, url:window.location.href, visitorId, urlParams, utm_source, utm_media, utm_campaign, refParams};
    fetch(`http://localhost:3000/api/track`, {
        method: 'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(data)
    });
 

    // Active Time Tracking
    let activeStartTime = Math.floor(Date.now()/1000)
    let totalActiveTime = 0;
    const handleExit = ()=>{
        const exitTime = Math.floor(Date.now()/1000);
        totalActiveTime += Math.floor(Date.now()/1000)-activeStartTime;
          fetch(`http://localhost:3000/api/track`, {
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
    //window.addEventListener('pagehide', handleExit);
})();