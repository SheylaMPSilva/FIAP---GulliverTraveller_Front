var map;
function initMap() {
    var mapOptions = {

        center: {lat: -23.60255071737841, lng:  -46.662042028835984},
        zoom: 14,
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

      // Adicionar marcador
      var marker = new google.maps.Marker ({
          position: {lat: -23.514126949886425, lng: -46.62616105489137},
          map: map,
          title: 'ibis Styles São Paulo Anhembi',
          label: 'Ibis - Gulliver',
          icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          animation:google.maps.Animation.BOUNCE,          
      });

      var marker2 = new google.maps.Marker ({
        position: {lat: -23.60255071737841, lng:  -46.662042028835984},       
        map: map,
        title: 'Comfort Ibirapuera',
        label: 'Comfort - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker3 = new google.maps.Marker ({
        position: {lat: -23.62288981230427, lng:  -46.6965116895055},       
        map: map,
        title: 'Blue Tree Morumbi',
        label: 'Blue Tree - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker4 = new google.maps.Marker ({
        position: {lat: -23.568335824199885, lng:  -46.65821234043288},       
        map: map,
        title: 'Mercure Pamplona',
        label: 'Mercure - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker5 = new google.maps.Marker ({
        position: {lat: -23.60908923054255, lng:  -46.69624220299783},       
        map: map,
        title: 'Sheraton São Paulo WTC',
        label: 'Sheraton - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker6 = new google.maps.Marker ({
        position: {lat: -23.60846546055224, lng:  -46.66662073183379},       
        map: map,
        title: 'Bourbon Convention Ibirapuera',
        label: 'Bourbon - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker7 = new google.maps.Marker ({
        position: {lat: -23.56001018449217, lng:  -46.65613432508924},       
        map: map,
        title: 'Blue Tree Premium Paulista',
        label: 'Blue Tree Premium - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker8 = new google.maps.Marker ({
        position: {lat: -23.57095900191781, lng:  -46.65775443862401},       
        map: map,
        title: 'Quality Hotel Paulista',
        label: 'Quality - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    var marker9= new google.maps.Marker ({
        position: {lat:  -23.55863715064873, lng:  -46.66196643183526},       
        map: map,
        title: 'Renaissance São Paulo Hotel',
        label: 'Renaissance - Gulliver',
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation:google.maps.Animation.DROP,
        animation:google.maps.Animation.BOUNCE,          
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<div class="infowindow"><h4>ibis Styles Anhembi</H4></div>',
        //position: ,
        //maxWidth: 200,
    });
  
    marker.addListerner('click', () => {
        infoWindow.open(map.marker);
    }); 
    

         

}

