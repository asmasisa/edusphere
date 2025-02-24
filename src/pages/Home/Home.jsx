import react from'react';
import './Home.css';
import'./Home.js';
import Layout from '../components/Layout/Layout';
const Home=() => {
return(
    <Layout>

    <header>
        
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item"><img src="/images/1.png" alt="Image 1"/></div>
            <div class="carousel-item"><img src="/images/2.png" alt="Image 2/"/></div>
            <div class="carousel-item"><img src="/images/4.png" alt="Image 3"/></div>
        </div>
     
    </div>
  



</header>
<h1 class="h1ticket" id="niveaux">Les niveaux</h1>

<div class="ticket-container">

<div class="ticket">
    <h2><img src="/images/equation-physique.png" alt=""/> التعليم الثانوي</h2>

             <ul>

                <li> <a href="#">   السنة أولى ثانوي </a>    </li>
                <li><a href="#"> السنة ثانية ثانوي</a></li>
                <li><a href="#">    السنة ثالثة ثانوي</a></li>

                <li><a href="#">    
                    مواضيع وحلول البكالوريا</a></li>

             </ul>



</div>
<div class="ticket">
    <h2><img src="/images/world-book-day.png" alt=""/> التعليم المتوسط</h2>
        
    <ul>

        <li> <a href="#">السنة أولى متوسط</a>     </li>
        <li><a href="#"> السنة ثانية متوسط</a></li>
        <li><a href="#">    السنة ثالثة متوسط</a></li>
        <li><a href="#">    السنة رابعة متوسط</a></li>
        <li><a href="#">    مواضيع و حلول ش.ت.م</a></li>


     </ul>


</div>
<div class="ticket">
    <h2><img src="crayon.png" alt=""/> التعليم الابتدائي</h2>


    <ul>

        <li> <a href="#">   السنة أولى ابتدائي</a>    </li>
        <li><a href="#"> السنة الثانية ابتدائي</a></li>
        <li><a href="#">    السنة الثالثة ابتدائي</a></li>
        <li><a href="#">    السنة الرابعة ابتدائي</a></li>
        <li><a href="#">    السنة الخامسة ابتدائي</a></li>
        <li><a href="#">    مواضيع ش.ت. الابتدائي</a></li>



     </ul>

</div>
</div>
<div class="ticket22">

<h1 class="h2ticket" id="library"> our learning library</h1>

<h3 class="pticket">   With thousands of digital and printable resources, find the best resource for your student.</h3>
<div class="ticket-container2">
<div class="ticket2">
    <h2><img src="/images/equation-physique.png" alt="/"/> exam&test</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quidem placeat repellat provident suscipit? Error excepturi veniam consequuntur laboriosam recusandae, impedit nostrum modi, officia deleniti voluptate praesentium voluptatem facere expedita!</p>       

    <BUtton> practice now</BUtton>

</div>
<div class="ticket2">
    <h2><img src="/images/travail-en-equipe.png" alt=""/> projects</h2>
        
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero doloribus suscipit, culpa commodi eaque soluta impedit pariatur recusandae, eveniet quos expedita, molestiae voluptatibus rem sapiente. Eos, maiores laborum. Quasi, necessitatibus!</p>
      <button>  search now </button>

</div>
<div class="ticket2">
    <h2><img src="/images/une-manette.png" alt=""/> Games</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quidem placeat repellat provident suscipit? Error excepturi veniam consequuntur laboriosam recusandae, impedit nostrum modi, officia deleniti voluptate praesentium voluptatem facere expedita!</p>
           <button> play now</button>
</div>
<div class="ticket2">
    <h2><img src="activites.png" alt=""/>pland</h2>


   <p>Lorem ipsum dolor sit amet</p>
   <button>organisez vous</button>

</div>
</div>

</div>

</Layout>
);







};
export default Home;