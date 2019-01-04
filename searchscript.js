
$(document).ready(function(){   
    $(function() {
        var search = [];
     
        $.getJSON('C:/Users/Kumar/Desktop/searchapp/data.json', function(dataparam) {
            $.each(dataparam.data, function(i, s) {
               var tblRow = "<tr>" + "<td>" + s.Id + "</td>" 
                                   + "<td>" + s.Name + "</td>" 
                                   + "<td>" + s.Address.line1 +"</br>"
                                            + s.Address.line2 +"</td>" 
                                   + "<td>" + s.City + "</td>" 
                                   + "<td>" + s.State + "</td>" 
                                   + "<td>" + s.pincode + "</td>" 
                                   + "<td>" + s.phone + "</td>" 
                                   + "<td>" + s.Type + "</td>" 
                                   + "<td>" + s.Rooms + "</td>" 
                                   + "<td>" + s.MaxPrice + "</td>" 
                                   + "<td>" + s.MinPrice + "</td>" 
                            + "</tr>"
                $(tblRow).appendTo("#searchdata tbody");
          });
        });
    }); 

    function getCountryByCode(code) {
        return data.filter(
            function(data){return data.code == code}
        );
    }
});