
const _dataLayer = [];
_dataLayer.push = () => {
    console.error('GTM 스니펫 코드를 먼저 실행하세요!!')
}
export const dataLayer =  window.dataLayer || _dataLayer;