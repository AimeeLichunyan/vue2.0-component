<template >
    <div>
        picker
    </div>
</template>
<script>
export default {
    name: 'aimee-date-picker',
    props:{
        value: {
            type: [String,Date],
            default:() => new Date()
        }
    }
}
</script>