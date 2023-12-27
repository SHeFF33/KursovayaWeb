import AdminPage from "../pages/AdminPage";
import EditGoodPage from "../pages/EditGoodPage";
import GoodsPage from "../pages/GoodsPage";
import LkPage from "../pages/LkPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import SingleGoods from "../pages/SingleGoods";
import NoteFoundPage from "../pages/NoteFoundPage";
import NewsItemPage from "../pages/NewsItemPage";

export const routes = [
  { link: '/goods', component: <GoodsPage /> },
  { link: 'goods/:id', component: <SingleGoods /> },
  { link: 'news', component: <NewsPage /> },
  { link: 'login', component: <LoginPage /> },
  { link: 'registration', component: <RegistrationPage /> },
  { link: 'news/:id', component: <NewsItemPage /> },
  { link: '*', component: <NoteFoundPage /> },
];

export const customerRoutes = [
  { link: 'lk/*', component: <LkPage /> },
];
export const AdminRoutes = [
    { link: 'goods/:id/edit', component: <EditGoodPage /> },
    { link: 'admin/*', component: <AdminPage /> },
  ];
