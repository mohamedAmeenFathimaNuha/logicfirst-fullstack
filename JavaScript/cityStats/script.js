  /* 
  'Chennai': population=46464646
             LiteracyRate=90
             language='Tamil'
  'Bengaluru': population=848484
               LiteracyRate=80
               language='Kannada'
    'Mumbai': population=54545454
             LiteracyRate=70
             language='Marati'
    'Delhi': population=73737373
             LiteracyRate=85
             language='Hindu'
    */
   
             const button=document.querySelector('button')
             let resultdiv=document.createElement('div')
                 resultdiv.id='result'
                 document.getElementById('wrapper').appendChild(resultdiv)
             //event listener
             button.addEventListener('click',displayStats)
             function displayStats(){
                const input=document.getElementById("input")
                const city=input.options[input.selectedIndex].value
                let population=0,literacyRate=0,language=''
                // check .. console.log(city)

                switch(city){
                    case 'Bengaluru':
                        population=848484
                        literacyRate=80
                        language='Kannada'
                     break
                    case  'Chennai':
                        population=46464646
                        literacyRate=90
                        language='Tamil'
                     break
                    case 'Mumbai':
                        population=54545454
                        literacyRate=70
                        language='Marati'
                     break
                    case 'Delhi' :
                        population=73737373
                        literacyRate=85
                        language='Hindi'
                        break
                }
                // let text='The Indian city of Bangaluru has a population of 84000 .language spoken is and literacy rate is 0%.'
                 let text=`The Indian city of ${city} has a population of ${population} .Language spoken is ${language} and literacy rate is ${literacyRate}.`
                 console.log(text)
                 
                 document.getElementById('result').innerHTML=text
             }
             