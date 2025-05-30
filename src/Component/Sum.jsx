import {connect} from "react-redux";


 function Sum({total}) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <h1 className="font-bold ">Total:{total} </h1>
        <div className="text-2xl font-semibold"> </div>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
    return{
        total:state.counters.reduce((sum,val)=>sum+val,0)
    }
}

export default connect(mapStateToProps)(Sum);
