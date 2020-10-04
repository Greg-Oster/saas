// let toggler = document.getElementById('toggler');
var togglers = document.getElementsByClassName('pricing-table__toggler');
var toggler1 = document.getElementById('toggler-small-checkbox');
var toggler2 = document.getElementById('toggler');

// for (let i = 0; i < togglers.length; i++) {
//     let element = togglers[i];
//     element .addEventListener('change', function() {
//         // Get the checkbox
//         var toggler = this;
    
//         // Get the output text
//         var textMonth = document.getElementsByClassName("pricing-table__content__price_month");
//         var textYear = document.getElementsByClassName("pricing-table__content__price_year");
      
//         // If the checkbox is checked, display the output text
//         if (toggler.checked == true){
    
//             for (let index = 0; index < textMonth.length; index++) {
//                 element = textMonth[index];
//                 element.style.display = "none";  
//             }
    
//             for (let index = 0; index < textYear.length; index++) {
//                 element = textYear[index];
//                 element.style.display = "block";  
//             }
    
//             console.log('true');
//         } else {
//             for (let index = 0; index < textMonth.length; index++) {
//                 element = textMonth[index];
//                 element.style.display = "block";  
//             }
    
//             for (let index = 0; index < textYear.length; index++) {
//                 element = textYear[index];
//                 element.style.display = "none";  
//             }
//             console.log('false');
//         }
//     });
      
// }


toggler1.addEventListener('change', function() {
    // Get the checkbox
    var toggler = document.getElementById("toggler-small-checkbox");

    // Get the output text
    var textMonth = document.getElementsByClassName("pricing-table__content__price_month");
    var textYear = document.getElementsByClassName("pricing-table__content__price_year");
  
    // If the checkbox is checked, display the output text
    if (toggler.checked == true){

        for (let index = 0; index < textMonth.length; index++) {
            element = textMonth[index];
            element.style.display = "none";  
        }

        for (let index = 0; index < textYear.length; index++) {
            element = textYear[index];
            element.style.display = "block";  
        }

        console.log('true');
        toggler2.checked = true;
    } else {
        for (let index = 0; index < textMonth.length; index++) {
            element = textMonth[index];
            element.style.display = "block";  
        }

        for (let index = 0; index < textYear.length; index++) {
            element = textYear[index];
            element.style.display = "none";  
        }
        console.log('false');
        toggler2.checked = false;
    }
});

toggler2.addEventListener('change', function() {
    // Get the checkbox
    var toggler = document.getElementById("toggler");

    // Get the output text
    var textMonth = document.getElementsByClassName("pricing-table__content__price_month");
    var textYear = document.getElementsByClassName("pricing-table__content__price_year");
  
    // If the checkbox is checked, display the output text
    if (toggler.checked == true){

        for (let index = 0; index < textMonth.length; index++) {
            element = textMonth[index];
            element.style.display = "none";  
        }

        for (let index = 0; index < textYear.length; index++) {
            element = textYear[index];
            element.style.display = "block";  
        }

        console.log('true');
        toggler1.checked = true;
    } else {
        for (let index = 0; index < textMonth.length; index++) {
            element = textMonth[index];
            element.style.display = "block";  
        }

        for (let index = 0; index < textYear.length; index++) {
            element = textYear[index];
            element.style.display = "none";  
        }
        console.log('false');
        toggler1.checked = false;
    }
});

