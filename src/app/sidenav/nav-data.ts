import {INavBarData} from "./helper";

export const navbarData: INavBarData[]=[
  {
    routerLink: 'dashboard',
    icon: 'fas fa-home',
    label: 'Dashboard'
  },
  {
    routerLink: 'products',
    icon: 'fas fa-box-open',
    label: 'Products',
    items:[
      {
        routerLink: 'products/level 1.1',
        label: 'level 1.1',
        items:[
          {
            routerLink: 'products/level2.1',
            label: 'level 2.1'
          },
          {
            routerLink: 'products/level2.2',
            label: 'level 2.2',
            items:[
              {
                routerLink: 'products/level3.1',
                label: 'level 3.1'
              },
              {
                routerLink: 'products/level3.2',
                label: 'level 3.2'
              }

              ],
          }
        ]
      },
      {
        routerLink: 'product/level1.2',
        label: 'level 1.2'
      }
    ]
  },
  {
    routerLink: 'statistics',
    icon: 'fas fa-home',
    label: 'Statistics'
  },
  {
    routerLink: 'pages',
    icon: 'fas fa-file',
    label: 'Pages'
  },
  {
    routerLink: 'coupens',
    icon: 'fas fa-file',
    label: 'Coupens',
    items:[
      {
        routerLink: 'coupens/list',
        label: 'list Coupens'
      },
      {
        routerLink: 'coupens/create',
        label: 'create Coupens'
      }
    ]
  },
  {
    routerLink: 'media',
    icon: 'fas fa-camera',
    label: 'Madia'
  },
  {
    routerLink: 'settings',
    icon: 'fas fa-cog',
    label: 'Settings',
    expanded:true,
    items:[
      {
        routerLink: 'setting/profile',
        label: 'Profile'
      },
      {
        routerLink: 'setting/customize',
        label: 'Customize'
      }
    ]
  }

];
