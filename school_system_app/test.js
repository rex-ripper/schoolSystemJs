import React, { Component } from 'react';



async function main() {
    console.log( await fetch('http://localhost:4000/Academic/Students'));

}

main();