
var islogdIn = true;
let userScore = 40;
let grade = '';
if (userScore >= 90 && userScore <= 100) {
  grade = 'A';
  
}else if (userScore >= 80 && userScore <= 89) {
  grade = 'B';
}else if (userScore >= 70 && userScore <= 79) {
  grade = 'C';
}else if (userScore >= 60 && userScore <= 69) {
  grade = 'D';
}else{
  grade = 'F';
}
export default function Home() {
  return (
   <div>
   <h1>Welcome to Next Js 14</h1>
   {
    userScore >= 60 ? 
    <h2>User is passed and grade is {grade}</h2>:
    <h2>User is failed and grade is {grade}</h2>
   }

   {islogdIn && <h1>Muhammad Hamza</h1>}
     {islogdIn?(<button>
    logout
    </button>)
   :
   (<button>
    login
    </button>)
   
  }

   </div>
   
  )
}
