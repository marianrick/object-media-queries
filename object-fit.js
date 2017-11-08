// this script does assign different
//   classes to single DOM objects, to
//   achieve more flexibility while
//   styling using stylesheets

// create function to assign object querie classes
function queryClasses (options = {}) {

    // store windowWidth to be used later 
    var w = window.innerWidth;        
    
    // set default parameters
    let defaults = {
        selector: '.fluid',
        className: 'size',
        classSeperator: '-'
    };

    // overwrite default parameters if custom options are assigned
    let actual = Object.assign({}, defaults, options)

    // store querie objects in array
    const objects = Array.from(document.querySelectorAll(actual.selector))

    // create and validate class names
    function validateClasses(target, size, w) {
        
        // check if size is >= window.width
        // if true, add className
        target.classList.toggle( actual.className + actual.classSeperator + size, w >= size )   
        // console.log(target, size, w)     

    }

    // create function to assign classes
    function assignClasses(target, w) {
        
        // get all required sizes as array
        const sizesArray = JSON.parse(target.dataset.sizes)
        
        // loop through each size individually
        var arrayLength = sizesArray.length;

        for (var i = 0; i < arrayLength; i++) {
            validateClasses(target, sizesArray[i], w)
        }
    }

    // create an array of all object querie 
    for (var i = 0, len = objects.length; i < len; i++) {
        assignClasses(objects[i], w);
    }
    
    // log the finished process
    // console.log('Classes have been assigned')
}

// wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function(event) {
    
    // assign classes on load
    queryClasses()

    // listen to resize events
    window.onresize = function(event) {
        queryClasses()
    }
    
})
