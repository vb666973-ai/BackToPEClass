import { Component, type ErrorInfo, type ReactNode } from 'react';
interface Props { children:ReactNode; }
interface State { failed:boolean; }
export default class ProductErrorBoundary extends Component<Props,State>{state:State={failed:false};static getDerivedStateFromError(){return {failed:true};}componentDidCatch(error:Error,info:ErrorInfo){console.error('Product view error',error.message,info.componentStack);}render(){if(this.state.failed)return <div className="page"><h1 className="page-title">This view could not open.</h1><p className="mt-4 text-muted-foreground">Your previously saved browser progress is unchanged. Reload to safely try again.</p><button className="btn mt-5" onClick={()=>window.location.reload()}>Reload the product</button></div>;return this.props.children;}}
