import "./Button.css";
function Button(){
    const styles = {
        backgroundColor : "lightgreen",
        color : "brown",
        padding : "10px 20px",


    }
    return(
        <>
        <button style={styles}>Click Me </button><br></br><br></br>
        <button className="button1"> button 1    </button><br></br><br></br>
        <button className="button2"> button 2 </button>
        </>
        

    );
        
    
}
export default Button;
