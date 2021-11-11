export default function UserInfo(props) {
  return  <div className="user-info">
            <div>{props.name}</div>
            <img src={props.picUrl} alt={props.name}></img>
          </div>;
}
