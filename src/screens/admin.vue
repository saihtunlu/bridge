<template>
  <div class="row">
    <MenuBtn />
    <div class="flex-end w-100 side-padding">
      <img src="/image/logo.png" width="200px" alt />
    </div>
    <div class="walls-table w-100 mx-5">
      <vs-table>
        <template #header>
          <vs-input v-model="search" border placeholder="Search" />
        </template>
        <template #thead>
          <vs-tr>
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'text')">
              Text Content
            </vs-th>

            <vs-th sort @click="posts = $vs.sortData($event, posts, 'name')">
              Name
            </vs-th>
            <vs-th
              sort
              @click="posts = $vs.sortData($event, posts, 'created_at')"
            >
              Posted Date
            </vs-th>
            <vs-th sort @click="posts = $vs.sortData($event, posts, 'image')">
              Choosen Image
            </vs-th>
            <vs-th>
              Actions
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage(
              $vs.getSearch(posts, search),
              page,
              max
            )"
            :data="tr"
          >
            <vs-td>
              {{ tr.text }}
            </vs-td>
            <vs-td>
              {{ tr.name }}
            </vs-td>
            <vs-td>
              {{ tr.created_at }}
            </vs-td>
            <vs-td>
              <img
                :src="tr.image"
                width="100px"
                style="border-radius:5px"
                alt=""
              />
            </vs-td>

            <vs-td>
              <vs-button flat danger @click="selectPost(tr.id, i)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-trash-2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  ></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Remove
              </vs-button>
            </vs-td>
          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination
            v-model="page"
            :length="$vs.getLength($vs.getSearch(posts, search), max)"
          />
        </template>
      </vs-table>
    </div>

    <vs-dialog
      id="alert"
      blur
      width="200px"
      not-close
      not-padding
      v-model="active"
    >
      <div class="con-content flex-center">
        <p class="sm-text">
          Are you sure to remove this post?
        </p>
      </div>
      <template #footer>
        <div class="con-footer">
          <div class="flex-center">
            <vs-button ref="button" danger @click="deletePost()" transparent>
              <p class="my-0 ">Yes</p>
            </vs-button>
            <vs-button @click="active = false" dark transparent>
              <p class="my-0 ">No, thanks!</p>
            </vs-button>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import MenuBtn from "./menu";
export default {
  data: () => ({
    search: "",
    page: 1,
    max: 5,
    selectedIndex: null,
    posts: [],
    deleteId: null,
    active: false,
  }),
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios.get("all-posts/").then((response) => {
        this.posts = response.data;
      });
    },
    selectPost(id, index) {
      this.deleteId = id;
      this.selectedIndex = index;
      this.active = true;
    },
    deletePost() {
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: "0.4",
        background: "danger",
        opacity: 1,
        color: "#fff",
      });
      this.$axios
        .delete("delete-post/" + this.deleteId)
        .then(() => {
          loading.close();
          this.active = false;
          this.posts.splice(this.selectedIndex, 1);
          this.$vs.notification({
            color: "success",
            title: "Success",
            text: "The post has been successfully removed!",
          });
        })
        .catch(() => {
          loading.close();
          this.active = false;
          this.$vs.notification({
            color: "danger",
            title: "Error",
            text: "Oops! There is an error while deleting!",
          });
        });
    },
  },
  components: {
    MenuBtn,
  },
};
</script>
<style>
.walls-table {
  background: #fff;
  padding: 15px;
  border-radius: 30px;
  margin-top: 1rem;
}
div#alert button.vs-button {
  height: 38px;
}
div#alert .vs-dialog {
  padding: 10px;
}
</style>
