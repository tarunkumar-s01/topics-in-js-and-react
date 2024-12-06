import { createBrowserRouter } from "react-router-dom";
import VirtualDom from "../componets/VirtualDom";
import MyImagesComp from "../componets/MyImagesComp";
import MystateComp from "../componets/MystateComp";
import EventComp from "../componets/EventComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import MyFavColorComp from "../componets/MyFavColorComp";
import FormValComp from "../componets/FormValComp";
import FormTask from "../task/FormTask";
import ProductDashComp from "../Crud/ProductDashComp";
import ProductAddComp from "../Crud/ProductAddComp";
import ProductEditComp from "../Crud/ProductEditComp";

const routing = createBrowserRouter([
    {path:'',element:<LoginComp></LoginComp>},
    {path:'login',element:<LoginComp></LoginComp>},
    {path:'maindashboard',element:<MainDashboardComp></MainDashboardComp> ,children:[
       
    {path:"mystate",element:<MystateComp></MystateComp>},
    {path:"virtualdom",element:<VirtualDom></VirtualDom>},
    {path:"images/:id",element:<MyImagesComp></MyImagesComp>},
    {path:'myfav',element:<MyFavColorComp newcolor='green'></MyFavColorComp>},
    {path:'formval',element:<FormValComp></FormValComp>},
    {path:'formtask',element:<FormTask></FormTask>},
    {path:'productdash',element:<ProductDashComp></ProductDashComp>},
    {path:'productadd',element:<ProductAddComp></ProductAddComp>},
    {path:`productedit/:id`,element:<ProductEditComp></ProductEditComp>},
    
    {path:"event", element:<EventComp></EventComp>},
    
    {path:'hooks',element:<ReactHooksComp></ReactHooksComp>,children:[
    {path:'useeffect',element:<UseEffectHooksComp></UseEffectHooksComp>},
    {path:'usestate',element:<UseStateHooksComp></UseStateHooksComp>}

    ]},
    {path:"*",element:<PageNotFoundComp></PageNotFoundComp>},
    
]}
]);

export default routing