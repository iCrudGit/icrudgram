import React from 'react'
import jsPDF from 'jspdf'
import myimg from '../pdf/TARF.png'

const Pdftemplate = () => {

    var img = new Image()
    img.src = myimg

    function generate(){

        const doc = new jsPDF('P','mm','A4')

        doc.addImage(img,'PNG',1,2,210,297)

        doc.setFontSize(11);
        doc.text(45,47, "Zoilo")  //45 x   ---- y 48

        doc.setFontSize(11);
        
        doc.text(45,52, "Mahumoc")  //45 x   ---- y 48

       

        doc.save('sample.pdf')
    }

  return (
    <div>
        <button onClick={generate} formTarget="_blank" type="primary">Download PDF</button> 
    </div>
  )
}

export default Pdftemplate