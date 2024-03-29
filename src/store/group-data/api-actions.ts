import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ChildAttendance,
  Group,
  GroupAttendance,
  Groups,
} from '../../types/group';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../../const';
import { Child, Children } from '../../types/children';

export const fetchGroups = createAsyncThunk<
  Groups,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/fetch', async (_arg, { extra: api }) => {
  const { data } = await api.get<Groups>(`${ApiRoute.Groups}/leads`);
  return data;
});

export const createGroup = createAsyncThunk<
  Group,
  Group,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/create', async (group, { extra: api }) => {
  const { data } = await api.post<Group>(`${ApiRoute.Groups}/create`, group);
  return data;
});

export const removeGroup = createAsyncThunk<
  string,
  string,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/remove', async (name, { extra: api }) => {
  await api.post(`${ApiRoute.Groups}/remove/${name}`);
  return name;
});

export const addChild = createAsyncThunk<
  Child,
  { name: string; childId: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/addChild', async ({ name, childId }, { extra: api }) => {
  const { data } = await api.post<Child>(
    `${ApiRoute.Groups}/${name}/add_child/${childId}`
  );
  return data;
});

export const removeChild = createAsyncThunk<
  Child,
  { name: string; childId: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/removeChild', async ({ name, childId }, { extra: api }) => {
  const { data } = await api.post<Child>(
    `${ApiRoute.Groups}/${name}/remove_child/${childId}`
  );
  data.group_name_id = name;
  return data;
});

export const fetchChildrenWithoutGroup = createAsyncThunk<
  Children,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/getChildren', async (_arg, { extra: api }) => {
  const { data } = await api.get<Children>(
    `${ApiRoute.Children}/children_without_group`
  );
  return data;
});

export const setGroupParameters = createAsyncThunk<
  { name: string; newGroup: Group },
  { name: string; group: Group },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('groups/setParameters', async ({ name, group }, { extra: api }) => {
  const { data } = await api.post<Group>(
    `${ApiRoute.Groups}/${name}/set_parameters`,
    group
  );
  return { name: name, newGroup: data };
});

export const fetchAttendance = createAsyncThunk<
  GroupAttendance,
  { groupName: string; startDate: string },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'groups/fetchAttendance',
  async ({ groupName, startDate }, { extra: api }) => {
    const { data } = await api.post<GroupAttendance>(
      `${ApiRoute.Groups}/${groupName}/get_attendance/${startDate}`
    );
    return data;
  }
);

export const fetchAttendanceForMonth = createAsyncThunk<
  GroupAttendance,
  { groupName: string; year: number; month: number },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'groups/fetchAttendanceForMonth',
  async ({ groupName, year, month }, { extra: api }) => {
    const { data } = await api.post<GroupAttendance>(
      `${ApiRoute.Groups}/${groupName}/get_attendance_for_month`,
      { year, month }
    );
    return data;
  }
);

export const setAttendance = createAsyncThunk<
  GroupAttendance,
  { groupName: string; startDate: string; childAttendance: ChildAttendance[] },
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'groups/setAttendance',
  async ({ groupName, startDate, childAttendance }, { extra: api }) => {
    const { data } = await api.post<GroupAttendance>(
      `${ApiRoute.Groups}/${groupName}/fill_attendance/${startDate}`,
      { children_attendance: childAttendance }
    );
    return data;
  }
);
