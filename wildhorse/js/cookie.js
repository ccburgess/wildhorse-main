@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

* {
    margin: 0;
    padding: 0;
    white-space: nowrap;
}

a {
    text-decoration: none;
    color:#484848;
}

body, html {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #121212;
    overflow: hidden;
}

#canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none
}

.container {
    width: 50%;
    height: 100%;
}

.main {
    width: 100%;
    height: 100%;
}

.main__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 39%;
    cursor: pointer;
}

.main__logo p {
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: #C8C8C8;
}

.main__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 40%;
}

.main__info p {
    font-family: 'Alata', 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #484848;
}

.main__info__language {
    margin-top: 8px;
}

.main__socials {
    display: flex;
    justify-content: center;
    position: relative;
    top: 44%;
}

.main__socials ul {
    display: flex;
    flex-direction: row;
}

.main__socials ul li {
    display: inline;
}

.main__socials ul li a {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #646464;
}

.main__socials ul li a:hover {
    background: linear-gradient(90.9deg, #FE934B 58.43%, #F8606F 105.62%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.main__socials ul span {
    margin-left: 10px;
    margin-right: 10px;
}

.main__download {
    display: flex;
    justify-content: center;
    position: relative;
    top: 45%;
}

.main__download p a {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Alata', 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    background: linear-gradient(90.9deg, #FE934B 58.43%, #F8606F 105.62%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
}

.main__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #484848;
}

.span__orange {
    background: linear-gradient(90.9deg, #FE934B 58.43%, #F8606F 105.62%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.span__blue {
    background: linear-gradient(89.93deg, #00ACF5 52.43%, #2873F9 84.29%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

#text__button__ru {
    cursor: pointer;
}

#text__button__en {
    cursor: pointer;
}

@media(max-width:380px) {
    .main__socials ul li a {
        text-decoration: none;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 19px;
        color: #646464;
    }

    .main__download p a {
        text-decoration: none;
        font-family: 'Alata', 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
        background: linear-gradient(90.9deg, #FE934B 58.43%, #F8606F 105.62%), #484848;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}
