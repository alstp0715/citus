  const tablePageBtn = document.querySelector("#table_btn");
  const homePageBtn = document.querySelector("#home_btn");
  const HIDDEN_classname = 'hidden'; 
    function changePage(form){
            const hasTableclass = tablePageBtn.classList.contains(HIDDEN_classname);
            fetch(form).then(function(response){
            response.text().then(function(text){
              if(!hasTableclass){
                tablePageBtn.classList.add(HIDDEN_classname);
                homePageBtn.classList.remove(HIDDEN_classname);
                document.querySelector('#tableForm').innerHTML = text;
                  }else {
                    homePageBtn.classList.add(HIDDEN_classname);
                    tablePageBtn.classList.remove(HIDDEN_classname);
                    location.href ="./index.html";
                  }
                });
              });
  }
const clock = document.querySelector("#clock");
const date_dis = document.querySelector('#date')

function whatTime(){
  const date = new Date();
  const year = String(date.getFullYear())
  const month = String(date.getMonth()+1)
  const Ddate = String(date.getDate())
  const hours =String(date.getHours()).padStart(2,"0");
  const minutes =String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  let weekday = new Array(7);
  weekday[0] = "일요일";
  weekday[1] = "월요일";
  weekday[2] = "화요일";
  weekday[3] = "수요일";
  weekday[4] = "목요일";
  weekday[5] = "금요일";
  weekday[6] = "토요일";
  const d = weekday[date.getDay()];
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  date_dis.innerText =` ${year}-${month}-${Ddate} ${d}`
}
whatTime()
setInterval(whatTime,1000);