export interface MenuInfoInterface{
    path: string,
    title: string,
    icon?: string,
    classCSS?: string,
    SubMenu?: MenuInfoInterface[],
}
