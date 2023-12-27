import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Goods', 'User', 'Categories'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (body) =>
        body.search ===''
          ? `/products?category_like=${body.category}&_start=0&_end=${body.limit}`
          : `/products?title_like=${body.search}`,
      providesTags: (result) => providesList(result, 'Goods'),
    }),

    getSingleGoods: build.query({
      query: (id) => `/products/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'Goods' }] : [{ type: 'Goods' }],
    }),

    changeSingleGoods: build.mutation({
      query: (body) => ({
        url: `/products/${body.idGoods}`,
        method: 'PATCH',
        body: {
          title: body.newTitle,
          price: body.newPrice,
          description: body.newDescription,
        },
      }),
      invalidatesTags: [{ type: 'Goods' }],
    }),

    addGoods: build.mutation({
      query: (body) => ({
        url: `/products`,
        method: 'POST',
        body: {
          title: body.title,
          price: body.price,
          description: body.description,
          category: body.category,
          images: body.images,
        },
      }),
      invalidatesTags: [{ type: 'Goods' }],
    }),

    getCategory: build.query({
      query: () => `/categories`,
      providesTags: (result) => providesList(result, 'Categories'),
    }),

    addCategories: build.mutation({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body: {
          name: body.name,
          visibleName: body.visibleName,
          image: body.image,
        },
      }),
      invalidatesTags: [{ type: 'Categories' }],
    }),

    getUsers: build.query({
      query: () => `/users`,
      providesTags: (result) => providesList(result, 'User'),
    }),

    getSingleUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'User' }] : [{ type: 'User' }],
    }),

    addUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
          name: body.name,
          role: body.role,
          avatar: body.avatar,
          basket: {
            item: []
          },
          history: {}
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useGetSingleGoodsQuery,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useGetCategoryQuery,
  useChangeSingleGoodsMutation,
  useAddCategoriesMutation,
  useAddGoodsMutation,
  useAddUserMutation,
} = goodsApi;

