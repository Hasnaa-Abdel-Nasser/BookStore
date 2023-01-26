import Navbar from "./components/navbar/Navbar";
import Recommend from "./components/recommendbook/Recommend";
import Author from "./components/Authors/Author";
import Books from "./components/Books/Books";
import Footer from './components/Footer/Footer';
import './App.css'
function App() {

  return (
    <> 
      <Navbar />
      <Recommend />
      <div className = "container">
        <Books/>
        <Author />
      </div>
      <Footer />
    </>
  );
}
export function theme(color , paragraphColor){
    document.body.style.backgroundColor = color;
    document.body.style.color=paragraphColor;
    let p = document.getElementsByTagName('p');
    for(let i=0;i<p.length;i++){
        if(p[i].className === "fo"||p[i].className === 'name' || p[i].className === 'author') continue;
        p[i].style.color= paragraphColor;
    }
}
export default App;
