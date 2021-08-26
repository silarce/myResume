// 套件
import styled from "@emotion/styled"
// material-ui的組件
import Grid from "@material-ui/core/Grid"
import { styled as styledMU } from '@material-ui/core/styles';
//Componrnts
import WorkHistory from "./childComponents/WorkHistory.jsx"
import Biography from "./childComponents/Biography.jsx"


const Subject = styled.h6`
font-size:2.5rem;
margin:10px 0 10px 0;
text-align:left;
`
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

function History() {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={2}>
                    <Subject>
                        學歷
                    </Subject>
                </Grid>
                <Grid item sm={10}>
                    <SectionTitle>國立台中技術學院</SectionTitle>
                    <SectionSubTitle>日五專會計統計科會計組</SectionSubTitle>
                    <SectionNote>2004/09~2009.06</SectionNote>
                </Grid>
            </Grid>

            <WorkHistory />
            <Biography />
        </>
    )
}

export default History