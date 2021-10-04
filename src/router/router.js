import Router from 'vue-router';
import Calandar from '@/components/Calandar'
import Meetings from '@/components/Meetings'
import Teams from '@/components/Teams'


const router= new Router({
    mode:'history',
    routes:[
        {
           name:'Calandar',
           path: '/',
           component:Calandar
        },
        {
            name:'Meetings',
            path: '/Meetings',
            component:Meetings
         },
         {
            name:'Teams',
            path: '/Teams',
            component:Teams
         }
    ]
})

export default router