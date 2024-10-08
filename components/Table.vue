<template>
  <div>
    <div class="drop-shadow-md">
      <table class="w-full">
        <thead class="text-base text-blue bg-white">
        <tr>
          <th
            v-for="(header,i) in headers"
            :key="i"
            @click="sortBy(header.sort)"
            class="sm:px-4 lg:px-2"
          >
            <div v-if="header.sort" class="sm:whitespace-nowrap sm:px-6 lg:px-3 flex justify-center space-x-2">
              <div class="cursor-pointer">
                <svg-icon name="Swap" width="15.82px" height="16.33px" class="h-full self-center"/>
              </div>
              <div class="py-4 cursor-pointer">
                <button class="font-semibold">
                  {{ header.title }}
                </button>
              </div>
            </div>
            <div v-if="!header.sort" class="sm:whitespace-nowrap sm:px-6 lg:px-3">
              <div class="py-4">
                <span class="font-semibold">
                  {{ header.title }}
                </span>
              </div>
            </div>
          </th>
        </tr>
        </thead>
        <tbody class="font-kanit text-base text-gray11 whitespace-nowrap">
        <tr
          class="bg-white border-t border-gray12 text-center"
          v-for="(row, indexRow) in filterData" :key="indexRow"
        >
          <td
            class="sm:px-4 py-4"
            v-for="(item, indexItem) in headers" :key="indexItem"
          >
            <span :class="classStatus(row[item.key])">
              {{ renderItem(row[item.key]) }}
            </span>

            <div class="py-4 flex justify-center space-x-4 pr-6" v-if="item.key === 'action'">
<!--              <a :href=`hr/leaves/${{item.id}}`>-->
                <slot name="action" :data="row"></slot>
<!--              </a>-->
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
    headers: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      sort: {
        key: '',
        isAsc: false,
      },
    }
  },

  computed: {
    filterData() {
      if (this.sort.key) {
        this.data.sort((newVal, oldVal) => {
          newVal = newVal[this.sort.key].toLowerCase()
          oldVal = oldVal[this.sort.key].toLowerCase()
          return (
            (newVal === oldVal ? 0 : newVal > oldVal ? 1 : -1) *
            (this.sort.isAsc ? 1 : -1)
          )
        })
      }
      return this.data
    }
  },

  methods: {
    sortedClassUp(key) {
      return this.sort.key === key ? this.sort.isAsc ? 'text-white opacity-10' : 'text-white' : 'text-white opacity-10'
    },

    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : true
      this.sort.key = key
    },

    renderItem(data) {
      if (/\$approve\$$/.test(data)) {
        return data.replace(/\$approve\$$/, "")
      } else if (/\$pending\$$/.test(data)) {
        return data.replace(/\$pending\$$/, "")
      } else if (/\$completed\$$/.test(data)) {
        return data.replace(/\$completed\$$/, "")
      } else if (/\$break\$$/.test(data)) {
        return data.replace(/\$break\$$/, "")
      } else if (/\$punchIn\$$/.test(data)) {
        return data.replace(/\$punchIn\$$/, "")
      } else if (/\$leaves\$$/.test(data)) {
        return data.replace(/\$leaves\$$/, "")
      } else if (/\$พนักงาน\$$/.test(data)) {
        return data.replace(/\$พนักงาน\$$/, "")
      } else if (/\$ทดลองงาน\$$/.test(data)) {
        return data.replace(/\$ทดลองงาน\$$/, "")
      } else if (/\$ฝึกงาน\$$/.test(data)) {
        return data.replace(/\$ฝึกงาน\$$/, "")
      }
      return data
    },

    classStatus(data) {
      if (/\$approve\$$/.test(data)) {
        return 'text-white bg-green rounded-lg px-3'
      } else if (/\$pending\$$/.test(data)) {
        return 'text-white bg-yellow rounded-lg px-3'
      } else if (/\$completed\$$/.test(data)) {
        return 'text-white bg-green rounded-lg px-3'
      } else if (/\$break\$$/.test(data)) {
        return 'text-white bg-red5 rounded-lg px-6'
      } else if (/\$punchIn\$$/.test(data)) {
        return 'text-white bg-green rounded-lg px-3'
      } else if (/\$leaves\$$/.test(data)) {
        return 'text-white bg-red4 rounded-lg px-4'
      } else if (/\$พนักงาน\$$/.test(data)) {
        return 'text-white bg-blue rounded-lg px-5'
      } else if (/\$ทดลองงาน\$$/.test(data)) {
        return 'text-white bg-yellow rounded-lg px-3'
      } else if (/\$ฝึกงาน\$$/.test(data)) {
        return 'text-white bg-purple1 rounded-lg px-6'
      }
      return 'text-blue'
    },


    mapPath(path, data) {
      const indexes = []

      for (let i = 0; i < path.length; i++) {
        if (path[i] === "$") {
          // เมื่อเจอ $ ให้ loop จนกว่าจะถึง $ หรือ ? หรือ /
          for (let j = i + 1; j < path.length; j++) {
            if (path[j] === "$" || path[j] === "?" || path[j] === '/') {
              indexes.push([i + 1, j])
              break
            }
          }

          // ตัวสุดท้ายของ path (/$var1?foo=?$var2)
          if (!indexes.some(e => e.includes(i + 1))) {
            indexes.push([i + 1, path.length])
          }
        }

      }

      // get ชื่อตัวแปร
      const keys = indexes.map(e => path.substring(e[0], e[1]))

      // แทนค่า ตัวแปล ด้วยข้อมูล
      keys.forEach(k => {
        path = path.replace(`$${k}`, data[k])
      })

      return path
    },
  }
}
</script>
