
function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 17.3850, lng: 78.4867},
          zoom: 6
        });
		
		var marker = new google.maps.Marker({
			position: {lat: 17.3850, lng: 78.4867},
			map: map,
			title: 'Hyderabad',
		});
		
		var contentString = 'im raghu'
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});
		
      }