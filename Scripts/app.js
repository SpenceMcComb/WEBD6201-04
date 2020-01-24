/**
 * Author: Spence McComb
 * Student ID: 100426427
 * Since: 2020/01/24
 */

"use strict";

//IIFE
let app;
(function(app){

    /**
     * "Global" variables.
     */
    let productsLink;
    let navbar;
    let humanResourcesLink;

    /**
     * Used for variable initialization.
     *
     */
    function Start() {

        // Assign the values to the Main() variables
        productsLink = document.getElementById("products");
        navbar = document.getElementById("navbarSupportedContent");
        humanResourcesLink = document.createElement("li");

        // Start the program
        Main();
    }

    /**
     * Used as the method for the bulk of the program.
     *
     */
    function Main() {  

        // Change the " Products" link name to " Projects".
        productsLink = productsLink.childNodes[0];
        productsLink = productsLink.childNodes[1];
        productsLink.textContent = " Projects";  

        // Add another link called " Human Resources".   
        humanResourcesLink.setAttribute("id", "human-resources");
        humanResourcesLink.setAttribute("class", "nav-item");

        // Insert the new link between " About Us" and " Contact Us".
        navbar = navbar.childNodes[1]; 
        navbar.insertBefore(humanResourcesLink, navbar.childNodes[9]);

        // Add the actual link to HTML.
        humanResourcesLink = document.getElementById("human-resources");
        humanResourcesLink.innerHTML = '<a class="nav-link" href="#"><i class="fas fa-user-friends"></i> Human Resources</a></li>';

        
    }

    // An an on-load event listener
    window.addEventListener("load", Start);
})(app || (app = {}));