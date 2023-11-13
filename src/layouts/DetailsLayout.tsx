import { Outlet } from 'react-router-dom';

export default function DetailsLayout() {
  return (
    <div className="details-wrapper">
      <div className="details">Details</div>
      <Outlet></Outlet>
    </div>
  );
}
