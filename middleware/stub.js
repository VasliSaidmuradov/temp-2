export default async function ({ redirect, route }) {
    return
    if (route.name != 'stub') {
        redirect('/stub')
    }
}
