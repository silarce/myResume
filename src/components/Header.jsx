// 套件
import styled from "@emotion/styled"
// import { styled as styledMU } from '@material-ui/core/styles';
// material-ui的組件
import Grid from "@material-ui/core/Grid"
// ICON
import { Html5 } from "@emotion-icons/fa-brands/Html5"
import { Css3Alt } from "@emotion-icons/fa-brands/Css3Alt"
import { JsSquare } from "@emotion-icons/fa-brands/JsSquare"
import { ReactLogo } from "@emotion-icons/fa-brands/ReactLogo"
import { Github } from "@emotion-icons/fa-brands/Github"
// 圖片
import myHeadImg from "../img/myHead.jpg"



const HeadImg = styled.img`
display:block;
width:150px;
height:225px;
object-fit:cover;
border-radius:5px;
margin:auto;
`
const Title = styled.h1`
font-size:3rem;
margin:0;
`
const SubTitle = styled.h3`
font-size:1.5rem;
margin:0;
`
const Subject = styled.h6`
font-size:2rem;
margin:10px 0 10px 0;
`
const DtSkill = styled.dt`
margin:10px 0 5px 0;
`
const LogoHtml5 = styled(Html5)`
color:#e34c26;
height:50px;
`
const LogoCss3 = styled(Css3Alt)`
color:#264de4;
height:50px;
`
const LogoJS = styled(JsSquare)`
color:#F0DB4F;
background: linear-gradient(
    0deg,
    transparent 0%,
    transparent 10%,
    #323330 11%,
    #323330 89%, 
    transparent 90%);
    transparent 100%);
height:50px;
`
const LogoReact = styled(ReactLogo)`
color:#61DBFB;
height:40px;
`
const LogoGithub = styled(Github)`
height:40px;
`
const TextWithLogo = styled.p`
display:inline;
font-size:1.5rem;
vertical-align: bottom;
margin-left:5px;
`
const TextInDd = styled.dd`
font-size:1.3rem;
line-height:34px;
`
const LinkBox = styled.div`
width:100%;
`
const LinkTitle = styled.div`
display:inline-flex;
width:125px;
justify-content:space-between;
margin-right:3px;
line-height:0;
`
const TheLink = styled.a`
display:inline-block;
`



function Header() {

    return (
        <header>
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <HeadImg src={myHeadImg} />
                </Grid>
                <Grid item sm={10}>
                    <Title>王川漾</Title>
                    <SubTitle>
                        前端工程師
                    </SubTitle>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={1} >
                            <Subject>
                                技能
                            </Subject>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <dl>
                                <DtSkill>
                                    <LogoHtml5 />
                                    <TextWithLogo>HTML</TextWithLogo>
                                </DtSkill>
                                <TextInDd>曾用canvas做小遊戲</TextInDd>
                                <DtSkill>
                                    <LogoCss3 />
                                    <TextWithLogo>CSS</TextWithLogo>
                                </DtSkill>
                                <TextInDd>會使用SCSS</TextInDd>
                                <TextInDd>熟悉CSS動畫</TextInDd>
                            </dl>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <dl>
                                <DtSkill>
                                    <LogoJS />
                                    <TextWithLogo>JavaScript</TextWithLogo>
                                </DtSkill>
                                <dd>
                                    <dl>
                                        <LogoReact />
                                        <TextInDd
                                            style={{ display: "inline", verticalAlign: "bottom", marginLeft: "5px" }}>
                                            React.js
                                        </TextInDd>
                                        <TextInDd>已有React Hook的基本功</TextInDd>
                                        <TextInDd>熟悉傳遞props</TextInDd>
                                    </dl>
                                </dd>
                                <TextInDd>了解同步與非同步的概念</TextInDd>
                                <TextInDd>會使用Promise</TextInDd>
                                <TextInDd>學過串聯API</TextInDd>
                            </dl>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={1} >
                            <Subject>
                                作品
                            </Subject>
                        </Grid>
                        <Grid item xs={12} md >
                            <dl>
                                <DtSkill>
                                    <LogoGithub />
                                    <TextWithLogo>Github</TextWithLogo>
                                </DtSkill>
                                <TextInDd>
                                    <dl>
                                        個人作品
                                        <TextInDd>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>網</p><p>頁</p><p>展</p><p>示 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://silarce.github.io/myDogAndCats/">
                                                    https://silarce.github.io/myDogAndCats/
                                                </TheLink>                                                
                                            </LinkBox>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p></p>
                                                </LinkTitle>
                                                <TheLink>
                                                    {`(還未對火狐優化，請不要用火狐瀏覽)`}
                                                </TheLink>                                                
                                            </LinkBox>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>原</p><p>始</p><p>碼 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://github.com/silarce/myDogAndCats">
                                                    https://github.com/silarce/myDogAndCats
                                                </TheLink>
                                            </LinkBox>
                                        </TextInDd>
                                    </dl>
                                </TextInDd>
                                <TextInDd>
                                    <dl>
                                        團隊作品
                                        <TextInDd>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>全</p><p>組</p><p>影</p><p>片 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://youtu.be/FQdnjbLatTA?t=4640">
                                                    https://youtu.be/FQdnjbLatTA?t=4640
                                                </TheLink>
                                            </LinkBox>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>自</p><p>己</p><p>的</p><p>部</p><p>分 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://youtu.be/FQdnjbLatTA?t=5378">
                                                    https://youtu.be/FQdnjbLatTA?t=5378
                                                </TheLink>
                                            </LinkBox>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>捕</p><p>魚</p><p>機</p><p>影</p><p>片 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://youtu.be/sfOfu93Lqaw">
                                                    https://youtu.be/sfOfu93Lqaw
                                                </TheLink>
                                            </LinkBox>
                                            <LinkBox>
                                                <LinkTitle>
                                                    <p>原</p><p>始</p><p>碼 :</p>
                                                </LinkTitle>
                                                <TheLink target="_blank"
                                                    href="https://github.com/Shananhsu/bet/tree/master">
                                                    https://github.com/Shananhsu/bet/tree/master
                                                </TheLink>
                                            </LinkBox>
                                        </TextInDd>
                                    </dl>
                                </TextInDd>
                            </dl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </header>


    )
}


export default Header

