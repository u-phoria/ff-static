!function(){"use strict";var a="https://w.chatlio.com/w.chatlio-widget.js",e=function(a,e){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src",a),t.setAttribute("data-loader-version","100fa45-1519848380086"),t.async=!0,t.id="chatlio-widget-embed";for(var d in e)t.setAttribute(d,e[d]);(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(t)},t=function(a){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var d=e[t].src;if(d&&d.indexOf(a)>=0)return e[t]}},d="currentScript"in document?document.currentScript:t(a);if(!d)return void console.warn("No Chatlio script node found. Contact support at support@chatlio.com!");for(var c={},i=0;i<d.attributes.length;i++){var f=d.attributes[i];0===f.name.indexOf("data-")&&(c[f.name]=f.value)}var r="v4",b=["5fcbf7a3-2ba6-48db-40c4-0a6fedd9d2cb","e7b77704-e3f7-4693-41a4-74ce73792a26","40a8ff55-5675-47f4-5a15-e7ac37624b32","45fca7f8-e276-4116-567d-08b1eda98f5f","2444084c-7929-4480-5f39-79aaeeb792ca","2f023c5d-ad82-407b-4940-06b0466aa6cf","f6f4625c-32ab-4b62-7ddc-4a3b0195eee6","855d06dd-6148-403a-402e-399761d3cda1","f925ccc1-6571-4a95-7da9-f704d0e655d9","17ed5219-90e1-49b1-404e-b6ebf1335d00","92a7b71c-869a-42f7-4973-77a2e8a7283d","bc225a3a-58f2-439d-62e4-0049204b7"],n=["1","2"];c["data-widget-id"]&&n.indexOf(c["data-widget-id"][0])>-1&&(r="v5"),c["data-widget-id"]&&b.indexOf(c["data-widget-id"])>-1&&(r="v4");var o=["a2228030-ebdd-4806-7c9d-3cb0283beb26","abe99faa-f391-4339-76d1-c4a8bb4f3f63","e24947ad-a9ef-4a2d-6a16-4e6ab1565ae3","0a7b82d2-5c8b-4cc5-56ef-a3099b2b8869","c275d093-8083-48f7-516b-0add1b26d5a2","8f88c081-cd9d-47e0-7458-56a74dd8f772","409ab7df-6c41-42c0-5b51-c07d72811093","207cad60-0de9-40ec-50c4-f70b94c12f09"];c["data-widget-id"]&&o.indexOf(c["data-widget-id"])>-1&&(r="v5"),c["data-embed-version"]&&"2.3"===c["data-embed-version"]&&(r="v5");var s="https://"+r+"-w.chatlio.com/w.chatlio-widget.js?loader-version=100fa45-1519848380086";"v"===r.charAt(0)&&(s="https://w.chatlio.com/"+r+"/w.chatlio-widget.js?loader-version=100fa45-1519848380086"),e(s,c)}();