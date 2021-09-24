import styled from "styled-components";

/* Top Nav */
export const Header = styled.header `
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

/* Auto Layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 16px 14px 18px;
position: absolute;
height: 65px;
left: 0px;
right: 0px;
top: 0px;
background: #0E4462;

h1 {
position: static;
height: 31px;
top: 17px;
font-family: Pacifico;
font-size: 20px;
line-height: 20px;
/* or 100% */
display: flex;
align-items: center;
text-align: center;
color: #49BEFF;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
}

`;

/* Bottom Nav */

export const Bnav = styled.nav `
display: flex;
flex-direction: row;
justify-content: center;
align-items: space-between;
position: absolute;
height: 65px;
left: 0px;
right: 0px;
bottom: 0px;
background: #033B5B;
color: #49BEFF;
padding: 8px 16px 14px 18px;

.nav-button {
    font-size: 12px;
    margin: 0px auto;
    bottom: 0px;
}
`;
