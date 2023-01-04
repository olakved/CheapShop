import styled from "styled-components";

export const FaqWrapper = styled.div`
width: 100%;
/* background-color: grey; */
display: flex;
justify-content: center;
margin-top: 20px;

.faqContainer{
    width: 450px;
    height: auto;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.containerActive{
    width: 450px;
    height: auto;
    overflow: hidden;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.faqHeader{
    font-size: 25px;
    margin-bottom: 10px;
}

.faqQue{
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    text-align: justify;
    margin-bottom: 5px;
}

.expandIcon{
    font-size: 12px;
}

.faqAns{
    padding: 10px 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    font-size: 12px;
    line-height: 1.2;
    text-align: justify;
    margin-bottom: 5px;
}


`