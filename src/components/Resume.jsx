// 套件
import styled from "@emotion/styled"
// 匯入的Component
import Header from "./Header.jsx"
import PageIntroduction from "./PageIntroduction.jsx"
import History from "./History.jsx"
// material-ui的組件
import theContainer from "@material-ui/core/Container"



const Container = styled(theContainer)`
background:#eee ;
padding-top:30px;
`


function Resume() {

    return (
        <Container fixed >
            <Header />
            <PageIntroduction/>
            <History />
        </Container>
    )
}

export default Resume

