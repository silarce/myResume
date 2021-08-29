

// 套件
import styled from "@emotion/styled"
// material-ui的組件
import Grid from "@material-ui/core/Grid"
import { styled as styledMU } from '@material-ui/core/styles';



const Subject = styled.h6`
font-size:2.5rem;
margin:10px 0 10px 0;
text-align:left;
`
const HistoryBoxGrid = styledMU(Grid)({
    backgroundColor: "#ddd",
})
const ChapterUl = styled.ul`
padding:0;
margin:0;
`
const ChapterLi = styled.li`
width:100%;
padding:5px;
font-size:1.4rem;
list-style-type:none;
border:0px solid black;
border-width:0 0 1px 0;
transition:0.5s;
color:black;
cursor:pointer;
&:hover{
    background:#ddd;
}

`
const ChapterTitleP = styled.p`
margin:0;
padding:3px;
`
const SectionBoxGrid = styledMU(Grid)({
    height: "500px",
    backgroundColor: "#eee",
    overflowY: "scroll",
    scrollBehavior: "smooth",
    paddingLeft: "25px !important",
    border: "0 solid #ddd",
    borderWidth: "0 0 0 2px",
    position: "relative"
})
const SectionTitle = styled.h3`
width:100%;
font-size:2rem;
margin:0 0 10px 0;
padding-top:15px;
`
const SectionSubTitle = styled.h6`
display:inline;
margin-right:10px;
font-size:1.6rem;
`
const SectionNote = styled.span`
font-size:1rem;
`
const SectionEssay = styled.p`
width:100%;
font-size:1.4rem;
line-height:2rem;
white-space: pre-wrap;
`

let moveToSectionTitle = (SectionTitleTop) => {
    let SectionBoxGrid = document.getElementById("SectionBoxGrid")
    SectionBoxGrid.scrollTop = SectionTitleTop
}


function WorkHistory() {

    return (
        <>
            <Grid container spacing={2} style={{ marginTop: "50px" }}>
                <Grid item sm={2}>
                    <Subject>
                        工作經歷
                    </Subject>
                </Grid>
                <HistoryBoxGrid container item sm={10} spacing={2}>
                    <Grid item sm={2} style={{ background: "#eee" }}>
                        <ChapterUl>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section1").offsetTop) }} >
                                <ChapterTitleP> 前端班學員</ChapterTitleP>
                                <ChapterTitleP> 資策會</ChapterTitleP>
                            </ChapterLi>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section2").offsetTop) }}>
                                <ChapterTitleP> 營業員</ChapterTitleP>
                                <ChapterTitleP> 中聯百貨</ChapterTitleP>
                            </ChapterLi>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section3").offsetTop) }}>
                                <ChapterTitleP> 學徒</ChapterTitleP>
                                <ChapterTitleP> 堃誠機械商行</ChapterTitleP>
                            </ChapterLi>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section4").offsetTop) }}>
                                <ChapterTitleP> 現場維修人員</ChapterTitleP>
                                <ChapterTitleP> 欣凱創新</ChapterTitleP>
                            </ChapterLi>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section5").offsetTop) }}>
                                <ChapterTitleP> 人事會計</ChapterTitleP>
                                <ChapterTitleP> 台中世聯會</ChapterTitleP>
                            </ChapterLi>
                            <ChapterLi onClick={() => { moveToSectionTitle(document.getElementById("section6").offsetTop) }} style={{ fontSize: "1.2rem" }}>
                                <ChapterTitleP> 海豚訓練師助理</ChapterTitleP>
                                <ChapterTitleP> 遠雄海洋公園</ChapterTitleP>
                            </ChapterLi>
                        </ChapterUl>
                    </Grid>
                    <SectionBoxGrid id="SectionBoxGrid" item sm={10}>
                        <section id="section1">
                            <SectionTitle>前端班學員</SectionTitle>
                            <SectionSubTitle>資策會</SectionSubTitle>
                            <SectionNote>2020.12~2021.05</SectionNote>
                            <SectionEssay>{`  我原本是邊工作邊自學，但覺得進度太慢所以決定投入積蓄到資策會上課 一開始的課程是HTML、CSS、JavaScript，因為已經先自學，有一點基礎，所以在一開始的課程相當的順利，同學時常會與我討論問題，我也樂意解答。

    然後開始學PHP與MySql，學習建立簡易的伺服器與資料庫、如何從網站用query語句對資料庫進行新增、修改、刪除、查詢。因為這是我沒接觸過的東西，學習就不如前面這麼順利。但我跟周遭同學相處得不錯，我們互相詢問、互相學習。

    再來就是學習Node.js與React。一開始先認識NPM還有各式各樣的套件，並且用Node.js建立伺服器，然後在學習React與Node.js配合，建立一個完整的網站。    我們的小組大專題就是使用Node.js與React建立的。我利用state的特性製作了內容會變動的Component，也用Canvas製作了捕魚機遊戲，遊戲中有利用AJAX將遊戲資料傳到伺服器資料庫中，也能用AJAX與路由將資料庫中的資料抓出來顯示在網頁上。 `}
                            </SectionEssay>
                        </section>
                        <section id="section2">
                            <SectionTitle>營業員</SectionTitle>
                            <SectionSubTitle>中聯百貨</SectionSubTitle>
                            <SectionNote>2020.03~2021.12</SectionNote>
                            <SectionEssay>{`    商品進貨:周一到周六的上午與下午，合作廠商都會送貨過來，這是要與廠商一同確認進貨項目正確並簽收。

    商品上架:商品送來後就要上架，上架的同時要確認商品的有效期限，並將較舊的商品移到貨架的第一排。
        
    補貨:每天上午與晚上都要進行補貨的作業，先巡過賣場，抄下需要補貨的商品，然後到倉庫收集這些商品送進賣場上架。上架的同時要注意有效期限，將較舊的商品放在貨架第一排。
        
    收銀:站在收銀台結帳，同時處理退貨，訂貨等事宜。當有客人進來時要大聲說出「歡迎光臨」或是促銷口號。當沒有收銀的時候要整理收銀台四周的貨架。
        
    送貨:每天一上班先確認有沒有送貨單，若有就要開始送貨事宜。先準備好要送的商品，確認商品與送貨單載明的項目一致後送去給顧客。 
                            `}
                            </SectionEssay>
                        </section>
                        <section id="section3">
                            <SectionTitle>學徒</SectionTitle>
                            <SectionSubTitle>堃誠機械商行</SectionSubTitle>
                            <SectionNote>2017.10~2019.09</SectionNote>
                            <SectionEssay>{`    進行空氣壓縮機的保養、維修與安裝作業。

    保養:對機器做簡單的清潔，檢查、更換耗材，例如機油、皮帶、壓力開關、逆止閥等。

    維修:將機器拆開並拆下損壞的零件，視損壞程度決定是要修好零件或是更換新零件。

    安裝:將空壓機送到安裝地點，機器放置定位後，進行拉電線、拉排水管、連接風管等事宜，最後試車，確定機器運轉正常。 `}
                            </SectionEssay>
                        </section>
                        <section id="section4">
                            <SectionTitle>現場維修人員</SectionTitle>
                            <SectionSubTitle>欣凱創新</SectionSubTitle>
                            <SectionNote>2016.10~2017.10</SectionNote>
                            <SectionEssay>{`    公司的主力商品是家用電梯。
    一開始是應徵業務職缺，到職後就變成現場維修人員了。主要的工作是在工廠中進行備料以及製造家用電梯主體與各式零件。也要去客戶家中丈量空間大小，並介紹商品，例如規格、裝飾、客製化等。待電梯的準備好，安裝現場的前置作業也完成後，便運送電梯到現場安裝。在這裡工作的一年中學習了許多工具的使用方法，像是砂輪機、電焊機等。

    也培養了在現場應變的能力，有兩次獨立處理現場遇到的問題。一次是電梯的停機感應器設置的不夠高，使的電梯無法停在預期的高度，我便使用塑鋼土做應急處置，墊高觸動感應器的鋼板後始電梯停在預期的位置。
    另一次是電梯的停機感應器無法同步觸動，造成的問題跟上例一樣，無法停在預期的位置，造成電梯與樓板間明顯的高低差。我利用兩條束帶將兩個感應器綁在一起作為應急處理，使的其中一個感應器被觸動時另一個感應器也會跟著被觸動，從而使電梯停在預期的位置。`}
                            </SectionEssay>
                        </section>
                        <section id="section5">
                            <SectionTitle>人事會計</SectionTitle>
                            <SectionSubTitle>台中市世界聯合保護動物協會</SectionSubTitle>
                            <SectionNote>2013.05~2016.05</SectionNote>
                            <SectionEssay>{`    主要工作內容為記帳、採購、付款、開立捐款收據、維護捐款紀錄、排假等。
    還有每周一次認養活動，要帶貓狗到認養活動的現場進行送養。同時也要在現場進行發送會刊、介紹協會等工作。

    有時也需要協助或獨立進行動物的急難救助，利用誘捕籠、網子等工具捕捉受傷的動物並受去獸醫院治療。

    偶爾要協助協會醫療室的獸醫師進行保定工作以利獸醫師進行醫療。`}
                            </SectionEssay>
                        </section>
                        <section id="section6" style={{ height: "100%" }}>
                            <SectionTitle>海豚訓練師助理</SectionTitle>
                            <SectionSubTitle>遠雄海洋公園</SectionSubTitle>
                            <SectionNote>2012.01~2012.07</SectionNote>
                            <SectionEssay>{`    協助訓練師訓練。
    處理並分裝海豚的飼料。清潔海豚的生活環境，包括水上與水下與海豚互動，觀察並記錄海豚的行為，如有異常要立即通報主管。

    在這裡工作的半年學會了現在很常用的動物訓練方法，響片訓練。訓練的原則其實就是用激勵的方法讓動物做我們希望他們做的事，雖然是動物訓練，但是對人也是有用的。我就常常激勵自己，對我接下來的人生很有幫助。`}
                            </SectionEssay>
                        </section>
                    </SectionBoxGrid>
                </HistoryBoxGrid>
            </Grid>
        </>
    )
}

export default WorkHistory