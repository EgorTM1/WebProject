import { Route, Routes } from "react-router"
import { listCategories } from "../constants/listCategories"
import All from '../../pages/pagesForCategories/All/All'


function RoutesForCategories() {
  return (
    <Routes>
      <Route path={listCategories['Диваны']} element={<All />} />
      <Route path={listCategories['Кресла']} element={<All />} />
      <Route path={listCategories['Кровати и матрасы']} element={<All />} />
      <Route path={listCategories['Столы и стулья']} element={<All />} />
      <Route path={listCategories['Шкафы']} element={<All />} />
    </Routes>
  )
}

export default RoutesForCategories