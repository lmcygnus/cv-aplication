import html2pdf from 'html2pdf.js';

function PdfButton() {
    function download() {
        const cv = document.querySelector('.cvs');
        const opt = {
            filename: 'cv.pdf',
            image: { type: 'jpeg', quality: 2 },
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'px', format: [cv.scrollWidth, cv.scrollHeight], orientation: 'portrait' }
        };
        html2pdf().set(opt).from(cv).save();
    }
    return (
        <div className="download">
            <button onClick={download}>Download CV</button>
        </div>
    )
}

export default PdfButton;