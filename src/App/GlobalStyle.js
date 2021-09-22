import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    


    body {
        width:100%;
        min-height:100vh;
        height:100%;
        background-color:#292929;
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        
    }

    :root {
        --white:        #ffffff;
        --blue:         #34effb;
        --grey:         #9d9d9d;
        --lightGray:    #5f605a;
        --red:          #b05252;
        --link:         #0057ff;
        --orange:       #fb8028;
        --container:    #3f3f3f;
        --yellow:       #ffa800; 
        --font-size:       20px;
    }

    li {
        list-style:none;
    }

    a {
        text-decoration:none;
    }

h1, p {
    color:white;
}


svg {
    fill:var(--white);
    transition:all 0.4s ease-in-out;
}

svg:hover{
    fill:var(--blue);
}
`