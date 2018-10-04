<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
	export default {
		name: 'BsCol',
		props: {
			xs: {
				type: Number,
				default: 12,
			},
			sm: {
				type: Number,
			},
			md: {
				type: Number,
			},
			lg: {
				type: Number,
			},
			xl: {
				type: Number,
			},
			hidden: String,
			visible: String,
			class: {
				type: [String, Array],
				default: () => [],
			},
		},
		computed: {
			classes() {
				let classes = this.class;
				if (typeof classes === 'string') {
					classes = classes.split(' ');
				}
				if (this.xs) {
					classes.push(`bs-col-xs-${this.xs}`);
				}
				if (this.sm) {
					classes.push(`bs-col-sm-${this.sm}`);
				}
				if (this.md) {
					classes.push(`bs-col-md-${this.md}`);
				}
				if (this.lg) {
					classes.push(`bs-col-lg-${this.lg}`);
				}
				if (this.xl) {
					classes.push(`bs-col-xl-${this.xl}`);
				}
				if (this.hidden) {
					classes.push(`bs-hidden-${this.hidden}`);
				}
				if (this.visible) {
					classes.push(`bs-visible-${this.visible}`);
				}
				return classes;
			},
		},
	};
</script>

<style lang="less" scoped>
    .bs-col-xs-1, .bs-col-sm-1, .bs-col-md-1, .bs-col-lg-1,
    .bs-col-xs-2, .bs-col-sm-2, .bs-col-md-2, .bs-col-lg-2,
    .bs-col-xs-3, .bs-col-sm-3, .bs-col-md-3, .bs-col-lg-3,
    .bs-col-xs-4, .bs-col-sm-4, .bs-col-md-4, .bs-col-lg-4,
    .bs-col-xs-5, .bs-col-sm-5, .bs-col-md-5, .bs-col-lg-5,
    .bs-col-xs-6, .bs-col-sm-6, .bs-col-md-6, .bs-col-lg-6,
    .bs-col-xs-7, .bs-col-sm-7, .bs-col-md-7, .bs-col-lg-7,
    .bs-col-xs-8, .bs-col-sm-8, .bs-col-md-8, .bs-col-lg-8,
    .bs-col-xs-9, .bs-col-sm-9, .bs-col-md-9, .bs-col-lg-9,
    .bs-col-xs-10, .bs-col-sm-10, .bs-col-md-10, .bs-col-lg-10,
    .bs-col-xs-11, .bs-col-sm-11, .bs-col-md-11, .bs-col-lg-11,
    .bs-col-xs-12, .bs-col-sm-12, .bs-col-md-12, .bs-col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .bs-col-xs-1, .bs-col-xs-2, .bs-col-xs-3, .bs-col-xs-4, .bs-col-xs-5, .bs-col-xs-6,
    .bs-col-xs-7, .bs-col-xs-8, .bs-col-xs-9, .bs-col-xs-10, .bs-col-xs-11, .bs-col-xs-12 {
        float: left;
    }

    /*xs*/
    .bs-col-xs-12 {
        width: 100%;
    }

    .bs-col-xs-11 {
        width: 91.66666667%;
    }

    .bs-col-xs-10 {
        width: 83.33333333%;
    }

    .bs-col-xs-9 {
        width: 75%;
    }

    .bs-col-xs-8 {
        width: 66.66666667%;
    }

    .bs-col-xs-7 {
        width: 58.33333333%;
    }

    .bs-col-xs-6 {
        width: 50%;
    }

    .bs-col-xs-5 {
        width: 41.66666667%;
    }

    .bs-col-xs-4 {
        width: 33.33333333%;
    }

    .bs-col-xs-3 {
        width: 25%;
    }

    .bs-col-xs-2 {
        width: 16.66666667%;
    }

    .bs-col-xs-1 {
        width: 8.33333333%;
    }

    /*xs-pull*/
    .bs-col-xs-pull-12 {
        right: 100%;
    }

    .bs-col-xs-pull-11 {
        right: 91.66666667%;
    }

    .bs-col-xs-pull-10 {
        right: 83.33333333%;
    }

    .bs-col-xs-pull-9 {
        right: 75%;
    }

    .bs-col-xs-pull-8 {
        right: 66.66666667%;
    }

    .bs-col-xs-pull-7 {
        right: 58.33333333%;
    }

    .bs-col-xs-pull-6 {
        right: 50%;
    }

    .bs-col-xs-pull-5 {
        right: 41.66666667%;
    }

    .bs-col-xs-pull-4 {
        right: 33.33333333%;
    }

    .bs-col-xs-pull-3 {
        right: 25%;
    }

    .bs-col-xs-pull-2 {
        right: 16.66666667%;
    }

    .bs-col-xs-pull-1 {
        right: 8.33333333%;
    }

    .bs-col-xs-pull-0 {
        right: auto;
    }

    /*xs-push*/
    .bs-col-xs-push-12 {
        left: 100%;
    }

    .bs-col-xs-push-11 {
        left: 91.66666667%;
    }

    .bs-col-xs-push-10 {
        left: 83.33333333%;
    }

    .bs-col-xs-push-9 {
        left: 75%;
    }

    .bs-col-xs-push-8 {
        left: 66.66666667%;
    }

    .bs-col-xs-push-7 {
        left: 58.33333333%;
    }

    .bs-col-xs-push-6 {
        left: 50%;
    }

    .bs-col-xs-push-5 {
        left: 41.66666667%;
    }

    .bs-col-xs-push-4 {
        left: 33.33333333%;
    }

    .bs-col-xs-push-3 {
        left: 25%;
    }

    .bs-col-xs-push-2 {
        left: 16.66666667%;
    }

    .bs-col-xs-push-1 {
        left: 8.33333333%;
    }

    .bs-col-xs-push-0 {
        left: auto;
    }

    /*offset*/
    .bs-col-xs-offset-12 {
        margin-left: 100%;
    }

    .bs-col-xs-offset-11 {
        margin-left: 91.66666667%;
    }

    .bs-col-xs-offset-10 {
        margin-left: 83.33333333%;
    }

    .bs-col-xs-offset-9 {
        margin-left: 75%;
    }

    .bs-col-xs-offset-8 {
        margin-left: 66.66666667%;
    }

    .bs-col-xs-offset-7 {
        margin-left: 58.33333333%;
    }

    .bs-col-xs-offset-6 {
        margin-left: 50%;
    }

    .bs-col-xs-offset-5 {
        margin-left: 41.66666667%;
    }

    .bs-col-xs-offset-4 {
        margin-left: 33.33333333%;
    }

    .bs-col-xs-offset-3 {
        margin-left: 25%;
    }

    .bs-col-xs-offset-2 {
        margin-left: 16.66666667%;
    }

    .bs-col-xs-offset-1 {
        margin-left: 8.33333333%;
    }

    .bs-col-xs-offset-0 {
        margin-left: 0;
    }

    @media (min-width: 768px) {
        .bs-col-sm-1, .bs-col-sm-2, .bs-col-sm-3, .bs-col-sm-4,
        .bs-col-sm-5, .bs-col-sm-6, .bs-col-sm-7, .bs-col-sm-8,
        .bs-col-sm-9, .bs-col-sm-10, .bs-col-sm-11, .bs-col-sm-12 {
            float: left;
        }

        .bs-col-sm-12 {
            width: 100%;
        }

        .bs-col-sm-11 {
            width: 91.66666667%;
        }

        .bs-col-sm-10 {
            width: 83.33333333%;
        }

        .bs-col-sm-9 {
            width: 75%;
        }

        .bs-col-sm-8 {
            width: 66.66666667%;
        }

        .bs-col-sm-7 {
            width: 58.33333333%;
        }

        .bs-col-sm-6 {
            width: 50%;
        }

        .bs-col-sm-5 {
            width: 41.66666667%;
        }

        .bs-col-sm-4 {
            width: 33.33333333%;
        }

        .bs-col-sm-3 {
            width: 25%;
        }

        .bs-col-sm-2 {
            width: 16.66666667%;
        }

        .bs-col-sm-1 {
            width: 8.33333333%;
        }

        .bs-col-sm-pull-12 {
            right: 100%;
        }

        .bs-col-sm-pull-11 {
            right: 91.66666667%;
        }

        .bs-col-sm-pull-10 {
            right: 83.33333333%;
        }

        .bs-col-sm-pull-9 {
            right: 75%;
        }

        .bs-col-sm-pull-8 {
            right: 66.66666667%;
        }

        .bs-col-sm-pull-7 {
            right: 58.33333333%;
        }

        .bs-col-sm-pull-6 {
            right: 50%;
        }

        .bs-col-sm-pull-5 {
            right: 41.66666667%;
        }

        .bs-col-sm-pull-4 {
            right: 33.33333333%;
        }

        .bs-col-sm-pull-3 {
            right: 25%;
        }

        .bs-col-sm-pull-2 {
            right: 16.66666667%;
        }

        .bs-col-sm-pull-1 {
            right: 8.33333333%;
        }

        .bs-col-sm-pull-0 {
            right: auto;
        }

        .bs-col-sm-push-12 {
            left: 100%;
        }

        .bs-col-sm-push-11 {
            left: 91.66666667%;
        }

        .bs-col-sm-push-10 {
            left: 83.33333333%;
        }

        .bs-col-sm-push-9 {
            left: 75%;
        }

        .bs-col-sm-push-8 {
            left: 66.66666667%;
        }

        .bs-col-sm-push-7 {
            left: 58.33333333%;
        }

        .bs-col-sm-push-6 {
            left: 50%;
        }

        .bs-col-sm-push-5 {
            left: 41.66666667%;
        }

        .bs-col-sm-push-4 {
            left: 33.33333333%;
        }

        .bs-col-sm-push-3 {
            left: 25%;
        }

        .bs-col-sm-push-2 {
            left: 16.66666667%;
        }

        .bs-col-sm-push-1 {
            left: 8.33333333%;
        }

        .bs-col-sm-push-0 {
            left: auto;
        }

        .bs-col-sm-offset-12 {
            margin-left: 100%;
        }

        .bs-col-sm-offset-11 {
            margin-left: 91.66666667%;
        }

        .bs-col-sm-offset-10 {
            margin-left: 83.33333333%;
        }

        .bs-col-sm-offset-9 {
            margin-left: 75%;
        }

        .bs-col-sm-offset-8 {
            margin-left: 66.66666667%;
        }

        .bs-col-sm-offset-7 {
            margin-left: 58.33333333%;
        }

        .bs-col-sm-offset-6 {
            margin-left: 50%;
        }

        .bs-col-sm-offset-5 {
            margin-left: 41.66666667%;
        }

        .bs-col-sm-offset-4 {
            margin-left: 33.33333333%;
        }

        .bs-col-sm-offset-3 {
            margin-left: 25%;
        }

        .bs-col-sm-offset-2 {
            margin-left: 16.66666667%;
        }

        .bs-col-sm-offset-1 {
            margin-left: 8.33333333%;
        }

        .bs-col-sm-offset-0 {
            margin-left: 0;
        }
    }

    @media (min-width: 992px) {
        .bs-col-md-1, .bs-col-md-2, .bs-col-md-3, .bs-col-md-4,
        .bs-col-md-5, .bs-col-md-6, .bs-col-md-7, .bs-col-md-8,
        .bs-col-md-9, .bs-col-md-10, .bs-col-md-11, .bs-col-md-12 {
            float: left;
        }

        .bs-col-md-12 {
            width: 100%;
        }

        .bs-col-md-11 {
            width: 91.66666667%;
        }

        .bs-col-md-10 {
            width: 83.33333333%;
        }

        .bs-col-md-9 {
            width: 75%;
        }

        .bs-col-md-8 {
            width: 66.66666667%;
        }

        .bs-col-md-7 {
            width: 58.33333333%;
        }

        .bs-col-md-6 {
            width: 50%;
        }

        .bs-col-md-5 {
            width: 41.66666667%;
        }

        .bs-col-md-4 {
            width: 33.33333333%;
        }

        .bs-col-md-3 {
            width: 25%;
        }

        .bs-col-md-2 {
            width: 16.66666667%;
        }

        .bs-col-md-1 {
            width: 8.33333333%;
        }

        .bs-col-md-pull-12 {
            right: 100%;
        }

        .bs-col-md-pull-11 {
            right: 91.66666667%;
        }

        .bs-col-md-pull-10 {
            right: 83.33333333%;
        }

        .bs-col-md-pull-9 {
            right: 75%;
        }

        .bs-col-md-pull-8 {
            right: 66.66666667%;
        }

        .bs-col-md-pull-7 {
            right: 58.33333333%;
        }

        .bs-col-md-pull-6 {
            right: 50%;
        }

        .bs-col-md-pull-5 {
            right: 41.66666667%;
        }

        .bs-col-md-pull-4 {
            right: 33.33333333%;
        }

        .bs-col-md-pull-3 {
            right: 25%;
        }

        .bs-col-md-pull-2 {
            right: 16.66666667%;
        }

        .bs-col-md-pull-1 {
            right: 8.33333333%;
        }

        .bs-col-md-pull-0 {
            right: auto;
        }

        .bs-col-md-push-12 {
            left: 100%;
        }

        .bs-col-md-push-11 {
            left: 91.66666667%;
        }

        .bs-col-md-push-10 {
            left: 83.33333333%;
        }

        .bs-col-md-push-9 {
            left: 75%;
        }

        .bs-col-md-push-8 {
            left: 66.66666667%;
        }

        .bs-col-md-push-7 {
            left: 58.33333333%;
        }

        .bs-col-md-push-6 {
            left: 50%;
        }

        .bs-col-md-push-5 {
            left: 41.66666667%;
        }

        .bs-col-md-push-4 {
            left: 33.33333333%;
        }

        .bs-col-md-push-3 {
            left: 25%;
        }

        .bs-col-md-push-2 {
            left: 16.66666667%;
        }

        .bs-col-md-push-1 {
            left: 8.33333333%;
        }

        .bs-col-md-push-0 {
            left: auto;
        }

        .bs-col-md-offset-12 {
            margin-left: 100%;
        }

        .bs-col-md-offset-11 {
            margin-left: 91.66666667%;
        }

        .bs-col-md-offset-10 {
            margin-left: 83.33333333%;
        }

        .bs-col-md-offset-9 {
            margin-left: 75%;
        }

        .bs-col-md-offset-8 {
            margin-left: 66.66666667%;
        }

        .bs-col-md-offset-7 {
            margin-left: 58.33333333%;
        }

        .bs-col-md-offset-6 {
            margin-left: 50%;
        }

        .bs-col-md-offset-5 {
            margin-left: 41.66666667%;
        }

        .bs-col-md-offset-4 {
            margin-left: 33.33333333%;
        }

        .bs-col-md-offset-3 {
            margin-left: 25%;
        }

        .bs-col-md-offset-2 {
            margin-left: 16.66666667%;
        }

        .bs-col-md-offset-1 {
            margin-left: 8.33333333%;
        }

        .bs-col-md-offset-0 {
            margin-left: 0;
        }
    }

    @media (min-width: 1200px) {
        .bs-col-lg-1, .bs-col-lg-2, .bs-col-lg-3, .bs-col-lg-4,
        .bs-col-lg-5, .bs-col-lg-6, .bs-col-lg-7, .bs-col-lg-8,
        .bs-col-lg-9, .bs-col-lg-10, .bs-col-lg-11, .bs-col-lg-12 {
            float: left;
        }

        .bs-col-lg-12 {
            width: 100%;
        }

        .bs-col-lg-11 {
            width: 91.66666667%;
        }

        .bs-col-lg-10 {
            width: 83.33333333%;
        }

        .bs-col-lg-9 {
            width: 75%;
        }

        .bs-col-lg-8 {
            width: 66.66666667%;
        }

        .bs-col-lg-7 {
            width: 58.33333333%;
        }

        .bs-col-lg-6 {
            width: 50%;
        }

        .bs-col-lg-5 {
            width: 41.66666667%;
        }

        .bs-col-lg-4 {
            width: 33.33333333%;
        }

        .bs-col-lg-3 {
            width: 25%;
        }

        .bs-col-lg-2 {
            width: 16.66666667%;
        }

        .bs-col-lg-1 {
            width: 8.33333333%;
        }

        .bs-col-lg-pull-12 {
            right: 100%;
        }

        .bs-col-lg-pull-11 {
            right: 91.66666667%;
        }

        .bs-col-lg-pull-10 {
            right: 83.33333333%;
        }

        .bs-col-lg-pull-9 {
            right: 75%;
        }

        .bs-col-lg-pull-8 {
            right: 66.66666667%;
        }

        .bs-col-lg-pull-7 {
            right: 58.33333333%;
        }

        .bs-col-lg-pull-6 {
            right: 50%;
        }

        .bs-col-lg-pull-5 {
            right: 41.66666667%;
        }

        .bs-col-lg-pull-4 {
            right: 33.33333333%;
        }

        .bs-col-lg-pull-3 {
            right: 25%;
        }

        .bs-col-lg-pull-2 {
            right: 16.66666667%;
        }

        .bs-col-lg-pull-1 {
            right: 8.33333333%;
        }

        .bs-col-lg-pull-0 {
            right: auto;
        }

        .bs-col-lg-push-12 {
            left: 100%;
        }

        .bs-col-lg-push-11 {
            left: 91.66666667%;
        }

        .bs-col-lg-push-10 {
            left: 83.33333333%;
        }

        .bs-col-lg-push-9 {
            left: 75%;
        }

        .bs-col-lg-push-8 {
            left: 66.66666667%;
        }

        .bs-col-lg-push-7 {
            left: 58.33333333%;
        }

        .bs-col-lg-push-6 {
            left: 50%;
        }

        .bs-col-lg-push-5 {
            left: 41.66666667%;
        }

        .bs-col-lg-push-4 {
            left: 33.33333333%;
        }

        .bs-col-lg-push-3 {
            left: 25%;
        }

        .bs-col-lg-push-2 {
            left: 16.66666667%;
        }

        .bs-col-lg-push-1 {
            left: 8.33333333%;
        }

        .bs-col-lg-push-0 {
            left: auto;
        }

        .bs-col-lg-offset-12 {
            margin-left: 100%;
        }

        .bs-col-lg-offset-11 {
            margin-left: 91.66666667%;
        }

        .bs-col-lg-offset-10 {
            margin-left: 83.33333333%;
        }

        .bs-col-lg-offset-9 {
            margin-left: 75%;
        }

        .bs-col-lg-offset-8 {
            margin-left: 66.66666667%;
        }

        .bs-col-lg-offset-7 {
            margin-left: 58.33333333%;
        }

        .bs-col-lg-offset-6 {
            margin-left: 50%;
        }

        .bs-col-lg-offset-5 {
            margin-left: 41.66666667%;
        }

        .bs-col-lg-offset-4 {
            margin-left: 33.33333333%;
        }

        .bs-col-lg-offset-3 {
            margin-left: 25%;
        }

        .bs-col-lg-offset-2 {
            margin-left: 16.66666667%;
        }

        .bs-col-lg-offset-1 {
            margin-left: 8.33333333%;
        }

        .bs-col-lg-offset-0 {
            margin-left: 0;
        }
    }
</style>
