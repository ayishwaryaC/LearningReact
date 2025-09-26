
function Child(props){

return(
    <div>
        <h3>Count click here</h3>
        <button onClick={()=>props.sendtotal(10)}>Increase total</button>
    </div>
)
}
export default Child