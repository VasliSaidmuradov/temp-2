export default async function ({ redirect, route }) {
    if (route.name != 'stub') {
        redirect('/stub')
    }
}
