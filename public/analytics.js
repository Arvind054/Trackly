
(function(){
    function generateID(){
        return Date.now().toString(36)+Math.random().toString().substring(2, 9);
    };

    let visitorId = localStorage.getItem('Trackly_Visitor_Id');
    if(!visitorId){
         visitorId = generateID();
        localStorage.setItem('Trackly_Visitor_Id', visitorId);
    };

    const script = document.currentScript;
    const websiteId = script.getAttribute('data-website-id');
    const domain = script.getAttribute('data-domain');
    
    // Get the Entry point
    const entryTime = Date.now();
   // Get Refrerr
   const refrrer = document?.referrer || 'Direct';
    // UTM sources
       const urlParams = new URLSearchParams(window.location.search);
       const utm_source = urlParams.get('utm-source') || '';
       const utm_media = urlParams.get('utm_media')|| '';
       const utm_campaign = urlParams.get('utm_campaign')|| '';
       const refParams = window.location.href.split('?')[1] || '';
    const data = {type: "entry",websiteId,domain,entryTime, refrrer, url:window.location.href, visitorId, urlParams, utm_source, utm_media, utm_campaign, refParams};
    fetch(`http://localhost:3000/api/track`, {
        method: 'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify(data)
    });
 

    // Active Time Tracking
    let activeStartTime = Date.now();
    let totalActiveTime = 0;
    const handleExit = ()=>{
        const exitTime = Date.now();
        totalActiveTime += Date.now()-activeStartTime;
          fetch(`http://localhost:3000/api/track`, {
            keepalive: true,
        method: 'POST',
        headers:{
            'Content-Type':"application/json"
        },
        body: JSON.stringify({type:"exit", websiteId,domain,exitTime, totalActiveTime, visitorId})
    });
    localStorage.removeItem('Trackly_Visitor_Id');
    }

    // Whenever the User Closes the Window
    window.addEventListener('beforeunload',handleExit);
    window.addEventListener('pagehide', handleExit);
})();