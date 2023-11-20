export const AppRoutes = {
  Main: '/',
  Login: '/login',
  Register: '/register',
  Children: '/children',
  Parents: '/parents',
  Groups: '/groups',
  Attendance: '/attendance',
  Payment: '/payment',
  ParentProfile: '/parent/profile',
  ParentSchedule: '/parent/schedule',
  ParentAttendance: '/parent/attendance',
};

export const NavItems = {
  Parent: [
    { name: 'Профиль', link: AppRoutes.ParentProfile },
    { name: 'Расписание', link: AppRoutes.ParentSchedule },
    { name: 'Посещаемость', link: AppRoutes.ParentAttendance },
  ],
  Trainer: [
    { name: 'Дети', link: AppRoutes.Children },
    { name: 'Родители', link: AppRoutes.Parents },
    { name: 'Группы', link: AppRoutes.Groups },
    { name: 'Посещаемость', link: AppRoutes.Attendance },
    { name: 'Задолженность', link: AppRoutes.Payment },
  ],
};

export const Days = ['вс','пн','вт','ср','чт','пт','сб']
