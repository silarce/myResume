
import styled from "@emotion/styled"
// material-ui的組件
import Grid from "@material-ui/core/Grid"

const Subject = styled.h6`
font-size:2.5rem;
margin:10px 0 10px 0;
text-align:left;
`
const SectionEssay = styled.p`
width:100%;
font-size:1.4rem;
white-space: pre-wrap;
line-height:2rem;
background:#eee;
padding:5px;
margin:0;
`
const SectionTitle = styled.h3`
display:inline-block;
width:auto;
font-size:2rem;
margin:0 10px 10px 0;
padding-top:15px;
`
const TheLink = styled.a`
display:inline-block;
font-size:1.2rem;
`
const SectionSubTitle = styled.h6`
display:inline-block;
margin:0 0 10px 0;
font-size:1.6rem;
`

function PageIntroduction() {
    return (
        <>
            <Grid container spacing={2} style={{ marginTop: "50px" }}>
                <Grid item sm={2}>
                    <Subject>
                        網頁簡介
                    </Subject>
                </Grid>
                <Grid item sm={10} style={{
                    background: "#ddd",
                    padding: "8px",
                    margin: "0 0 50px -8px"
                }}>
                    <div>
                        <SectionTitle>個人作品:阿貓阿狗</SectionTitle>
                        <TheLink href="https://silarce.github.io/myDogAndCats/">https://silarce.github.io/myDogAndCats/</TheLink>
                    </div>
                    <SectionSubTitle>簡介與心得</SectionSubTitle>
                    <SectionEssay>{`	這個網頁是以我在資策會時做的第一個小專題為藍本製作的，可以說是該小專題的重製加強版。當時只會基本的HTML、CSS與JavaScript，現在我用React新製作出來，與舊版相比，除了新增了許多特效外，效能與可讀性也獲得很大的改善。
                    
    我認為，要想確實學好一個技術(例如JavaScript或React)，在學習的時候若使用像jQuery UI、bootstrap或Material-ui這類的框架，會失去很多練習與思考的機會，我會無法真正的了解我想學習的東西，將來也會無法客製化產品。因此，我第一個使用React的作品完全沒有使用這類的框架，這個網頁的特效全都是自己從無到有設計、寫出來的。

    一開始我的特效都是使用setInterval每16毫秒改變一次DOM，這是我初學JavaScript時學到的做法。後來了解到修改DOM會占用大量的運算效能，因此必須要盡可能減少改變DOM的次數，於是做了一次大改寫，利用CSS animation製作特效。

    之後又了解到改變DOM樣式的top、left會觸發DOM的重排，這也是非常吃效能的。於是我再次做了修改，不改變top或left，改用transform:translate來改變DOM元素的位置。

    就這樣，這個網頁我改寫了兩次，雖然花了不少時間，但我也因此進步了許多，兩次的進步都讓我很開心。接著我會開始學習如何使用material-ui，以期快速地寫好一個好網頁。
                    `}

                    </SectionEssay>
                </Grid>
            </Grid>
        </>
    )
}


export default PageIntroduction