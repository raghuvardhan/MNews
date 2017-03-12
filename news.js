var places;
 var sol;
      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 17.3850, lng: 78.4867},
          zoom: 6,
        });

        
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });
        var markers = [];
       
        searchBox.addListener('places_changed', function() {
          places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }
          else{
          
            var geocoder = new google.maps.Geocoder;
         geocoder.geocode({'location': places[0].geometry.location}, function(results, status) {
      if (status === 'OK') {
        if (results[1]) {
        sol=results[1].formatted_address.split(",").reverse()[2]
        
        initialize()
      }
    } 
  });
          }

         
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

         
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

           
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            
            if (place.geometry.viewport) {
             
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

        
        
      }

   
      google.load("feeds", "1");
       function initialize() {
       
         var feed = new google.feeds.Feed("http://news.google.com/news?geo="+sol+"&output=rss");
      feed.load(function(result) {
        
         
         var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var el = document.createElement("div");
            var anc = document.createElement("a");
         
            anc.setAttribute("href",entry.link);
            anc.setAttribute("target","_blank");
            anc.innerHTML=sol+": "+entry.title;
            el.appendChild(anc);
            container.appendChild(el);

          }
      });
     

    }
       

   
