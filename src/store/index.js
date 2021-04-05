import { createStore } from "vuex";
import S3 from "aws-sdk/clients/s3";

export default createStore({
	state () {
		return {
			s3: null,
			videos: []
		}
	},
	mutations: {
		setCredentials(state, {
			accessKeyId,
			secretAccessKey,
			endpoint = "https://gateway.tardigradeshare.io",
		}) {
			this.s3 = new S3({
				accessKeyId,
				secretAccessKey,
				endpoint,
				s3ForcePathStyle: true,
				signatureVersion: "v4"
			});
		},

		setVideos(state, videos) {
			state.videos = videos;
		}
	},
	actions: {
		async loadVideos({ state, dispatch }, { Bucket }) {
			const videos = await state.s3.listObjects({
				Bucket
			}).promise();

			dispatch("setVideos", videos);
		}
	}
  });