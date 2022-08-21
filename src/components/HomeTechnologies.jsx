import React from "react";
import { technologiesSvg } from "../assets";
import { HomeTechnologiesCard } from "./HomeTechnologiesCard";

export function HomeTechnologies() {
  const techData = [
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="68"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M11.409 50.804c0 1.552 1.283 2.822 2.852 2.822h2.852v9.879c0 2.342 1.91 4.233 4.278 4.233 2.367 0 4.278-1.89 4.278-4.233v-9.879h5.705v9.879c0 2.342 1.91 4.233 4.278 4.233 2.367 0 4.278-1.89 4.278-4.233v-9.879h2.852c1.569 0 2.852-1.27 2.852-2.822V22.579H11.41v28.225Zm-7.13-28.225C1.91 22.58 0 24.471 0 26.813V46.57c0 2.343 1.91 4.234 4.278 4.234 2.367 0 4.278-1.891 4.278-4.234V26.813c0-2.342-1.91-4.233-4.278-4.233Zm48.486 0c-2.368 0-4.279 1.892-4.279 4.234V46.57c0 2.343 1.911 4.234 4.279 4.234 2.367 0 4.278-1.891 4.278-4.234V26.813c0-2.342-1.911-4.233-4.278-4.233ZM38.59 6.096l3.707-3.669c.57-.564.57-1.44 0-2.004a1.422 1.422 0 0 0-2.025 0l-4.22 4.178a16.797 16.797 0 0 0-7.53-1.779c-2.739 0-5.306.65-7.587 1.779L16.685.423a1.422 1.422 0 0 0-2.025 0c-.57.565-.57 1.44 0 2.004l3.736 3.698C14.176 9.2 11.41 14.14 11.41 19.757h34.225c0-5.617-2.766-10.584-7.044-13.66Zm-15.773 8.016h-2.852V11.29h2.852v2.822Zm14.26 0h-2.851V11.29h2.852v2.822Z"
          />
        </svg>
      ),
      title: "Andriod",
      info: "Create a seamless mobile experience with Android app development.Our software house has been recognized by Google for outstanding Android application quality.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="61"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M43.221 32.028c-.027-4.966 2.253-8.714 6.867-11.474-2.582-3.64-6.482-5.643-11.633-6.035-4.875-.38-10.204 2.8-12.154 2.8-2.06 0-6.785-2.665-10.493-2.665C8.144 14.776 0 20.675 0 32.678c0 3.545.66 7.207 1.978 10.987C3.736 48.63 10.08 60.809 16.7 60.605c3.46-.08 5.905-2.421 10.41-2.421 4.367 0 6.634 2.422 10.493 2.422 6.675-.095 12.416-11.164 14.091-16.143-8.955-4.154-8.474-12.178-8.474-12.435ZM35.448 9.81c3.75-4.384 3.406-8.376 3.296-9.81-3.31.19-7.142 2.22-9.326 4.722-2.403 2.68-3.818 5.995-3.515 9.73 3.584.27 6.853-1.543 9.545-4.642Z"
          />
        </svg>
      ),
      title: "IOS",
      info: "Stay ahead of the curve with a custom iOS app.We offer iOS application development services for startups, enterprises, and unicorns around the globe.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="64"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M47.214.306c0 2.42-.018 4.763 0 7.11.035 3.918 1.982 5.873 5.916 5.9 3.008.023 6.016.032 9.021 0 3.753-.047 5.706-2.009 5.759-5.75.032-2.3.018-4.6.03-6.899.008-.1.028-.198.059-.294 4.173-1.365 7.761 1.14 7.764 5.466.012 17.229.012 34.458 0 51.687 0 3.621-1.996 5.71-5.62 5.73-8.379.049-16.76.049-25.142 0-3.63-.02-5.62-2.109-5.62-5.73 0-17.033.071-34.066-.056-51.1-.053-4.205 2.493-7.122 7.889-6.12Zm14.33 35.614c.296-.132.5-.246.725-.334 3.103-1.207 4.83-3.757 4.58-6.77a6.646 6.646 0 0 0-1.615-3.783 6.726 6.726 0 0 0-3.541-2.126c-3.05-.643-5.816.702-7.463 3.504a2.033 2.033 0 0 1-1.423.831c-1.497.112-3.008.041-4.481.041v13.113h13.219V35.92ZM34.856 6.928v35.847H0V14.408c0-4.907 2.61-7.533 7.552-7.544 8.625-.018 17.25-.018 25.875 0 .438-.003.876.038 1.429.064Zm-11.154 25.53c4.436-1.378 6.803-4.455 6.584-8.438-.195-3.709-2.83-6.687-6.602-7.459-3.686-.755-7.099 1.157-9.072 4.992a1.641 1.641 0 0 1-1.183.7c-1.461.085-2.931.032-4.437.032v14.57h14.724l-.014-4.397ZM34.82 56.07H7.513c-4.83 0-7.522-2.676-7.513-7.44v-1.27h34.82v8.71Z"
          />
          <path
            fill="#2ECC82"
            d="M63.482.215v7.474c0 .863-.364 1.24-1.236 1.233a1142.97 1142.97 0 0 0-9.442 0c-.795 0-1.183-.343-1.183-1.142V.218L63.482.215ZM62.43 29.289a2.183 2.183 0 0 0-.397-1.225 2.224 2.224 0 0 0-3.434-.238 2.187 2.187 0 0 0-.375 2.431 2.2 2.2 0 0 0 .874.95 2.222 2.222 0 0 0 2.744-.397 2.18 2.18 0 0 0 .587-1.521Zm-5.077 6.734c-1.13-1.392-2.123-2.623-3.13-3.844-.141-.174-.313-.394-.508-.444a3.974 3.974 0 0 0-.932-.017v4.384h3.352c.293-.011.585-.058 1.218-.088v.01Z"
          />
          <path
            fill="#2ECC82"
            d="M62.429 29.29c.016.43-.096.857-.323 1.226a2.204 2.204 0 0 1-.953.844 2.224 2.224 0 0 1-2.417-.365 2.18 2.18 0 0 1 .155-3.376 2.22 2.22 0 0 1 1.198-.438 2.206 2.206 0 0 1 1.622.56 2.18 2.18 0 0 1 .718 1.548Zm-5.076 6.724c-.633.041-.925.077-1.218.077h-3.352v-4.382c.31-.03.623-.025.932.018.195.05.367.27.509.443 1.006 1.23 2 2.452 3.13 3.844Zm-35.13-7.861a3.722 3.722 0 0 1-2.064-.597 3.672 3.672 0 0 1-1.38-1.638 3.64 3.64 0 0 1 .777-4.01 3.716 3.716 0 0 1 4.032-.807c.678.278 1.256.75 1.662 1.354a3.646 3.646 0 0 1-.448 4.615 3.698 3.698 0 0 1-2.58 1.083Zm-2.976 4.349h-5.853v-5.965c.461.244.996.344 1.094.605.87 2.28 2.5 3.818 4.626 4.899.056.03.053.185.133.46Z"
          />
          <path
            fill="#2ECC82"
            d="M7.13 15.158h24.065V37.44H7.13zm37.435 4.457h24.956v23.174H44.565z"
          />
        </svg>
      ),
      title: "Cross-Platform",
      info: "Cut your time-to-market with cross-platform application development.We help you save time and resources thanks to our development services.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="60"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M15.34 60c.132-2.953 2.15-4.844 5.171-4.923 2.333-.062 4.667-.038 7-.059.087 0 .17-.079.346-.164v-4.797H5.802c-3.844 0-5.79-1.896-5.793-5.66-.012-12.916-.012-25.832 0-38.749C.009 1.888 1.955 0 5.817 0h49.318C59.087 0 60.997 1.873 61 5.745v38.6c0 3.851-1.934 5.712-5.888 5.715H33.155v4.99c2.408 0 4.768-.026 7.152 0 2.682.039 4.655 1.448 5.272 3.714.078.404.128.813.149 1.224L15.34 60Zm14.603-23.804c1.674-7.43 3.346-14.834 5.066-22.422-.804.043-1.61.043-2.414 0-1.192-.135-1.669.317-1.836 1.467-.211 1.495-.65 2.957-.98 4.433-1.237 5.475-2.468 10.947-3.725 16.522h3.889Zm-9.125-5.334-6.434-6.074 6.145-5.578-2.542-2.756c-2.408 2.33-4.842 4.62-7.185 6.995-.894.913-.944 2.167-.062 3.074 2.357 2.422 4.84 4.729 7.292 7.101l2.786-2.762Zm22.266 2.874c2.384-2.37 4.718-4.636 7-6.94.894-.907 1.174-2.16.322-3.059-2.384-2.522-4.947-4.879-7.313-7.18l-2.908 2.689c2.065 1.949 4.124 3.89 6.332 5.976l-6.23 5.83 2.797 2.684Z"
          />
        </svg>
      ),
      title: "Frontend",
      info: "Take your app to the next level with our front-end app development.We build user-oriented intuitive web applications that highlight your brand image.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="52"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M.005 14.195h63.277v30.822c0 4.061-2.19 6.318-6.158 6.318H6.095c-3.828 0-6.087-2.284-6.09-6.135V14.195ZM20.3 37.694c-.158 1.792 2.81 5.164 4.583 5.232.123.007.247 0 .368-.023 1.219-.266 2.067.251 2.887 1.152a3.401 3.401 0 0 0 1.891.962c1.06.164 2.139.164 3.199 0a3.806 3.806 0 0 0 1.977-1.035c.35-.394.784-.701 1.269-.898a3.359 3.359 0 0 1 1.53-.236c.701.032 1.507-.324 2.115-.736.707-.477 1.236-1.222 1.864-1.822.813-.768 1.048-1.67 1.048-2.804a3.545 3.545 0 0 1 .88-2.287c1.322-1.346 1.886-5.448.741-6.964-.17-.228-.494-.366-.605-.613-.391-.808-1.004-1.641-1.021-2.477-.037-1.82-2.638-5.174-4.45-5.39a2.007 2.007 0 0 0-.612.015c-1.162.221-1.978-.279-2.786-1.107a3.816 3.816 0 0 0-1.995-1.004 9.081 9.081 0 0 0-3.072 0c-.78.16-1.502.537-2.084 1.09-.793.773-1.572 1.132-2.699 1.081a3.86 3.86 0 0 0-2.126.678c-.707.47-1.236 1.225-1.863 1.818-.853.793-1.113 1.717-1.09 2.91a3.467 3.467 0 0 1-.93 2.258c-1.327 1.323-1.844 5.48-.68 6.977.156.195.336.368.537.514.942.68 1.199 1.622 1.125 2.709Zm42.986-27.368H.064c0-1.877-.168-3.722.04-5.522C.43 1.972 2.788.064 5.734.054c7.248-.023 14.495 0 21.752 0 9.758 0 19.526.11 29.277-.053 4.202-.072 6.89 2.81 6.546 6.75-.11 1.148-.023 2.318-.023 3.575Zm-47.5-2.166.184-.319c.989.075 1.943-.015 2.44-1.03.22-.384.29-.839.193-1.273a1.758 1.758 0 0 0-.715-1.066c-.761-.615-3.157-.557-3.841.1-.685.658-.967 1.522-.364 2.227.512.61 1.38.92 2.104 1.361Zm8.874-4.31c-.783.303-1.582.437-2.148.876-.778.607-.682 1.842.025 2.55.836.839 3.297.836 4.12 0 .71-.723.794-1.925 0-2.553-.526-.431-1.277-.575-2.006-.873h.01Zm-17.356 4c1.747 0 2.684-.474 2.692-1.601a2.85 2.85 0 0 0-.878-1.86c-.652-.616-3.12-.478-3.571.183-.374.542-.658 1.395-.517 2.008.255 1.15 1.298 1.34 2.264 1.27h.01Z"
          />
          <path
            fill="#2ECC82"
            d="M41.577 31.173a4.28 4.28 0 0 1-.215.848c-.71 1.338-1.812 2.596-2.066 4.017-.341 1.89-.932 2.761-2.924 3.04-1.392.2-2.623 1.408-3.99 2.008-.445.198-1.14.035-1.643-.16-1.73-.673-3.392-1.52-5.14-2.122-.797-.273-1.097-.587-1.351-1.426a30.865 30.865 0 0 0-2.091-5.08c-.396-.779-.383-1.19.037-1.966a25.131 25.131 0 0 0 2.056-4.976c.247-.891.53-1.22 1.404-1.506a31.549 31.549 0 0 0 5.01-2.126c.76-.397 1.204-.397 1.963 0a30.994 30.994 0 0 0 5.01 2.123c.878.28 1.147.605 1.404 1.507.495 1.72 1.308 3.344 2.012 4.998.15.289.326.563.524.82Zm-9.929-3.264a3.33 3.33 0 0 0-1.86.603 3.412 3.412 0 0 0-1.22 1.55 3.472 3.472 0 0 0-.166 1.977c.137.66.465 1.266.94 1.738a3.352 3.352 0 0 0 1.733.916c.654.125 1.33.05 1.942-.214a3.382 3.382 0 0 0 1.498-1.273 3.46 3.46 0 0 0 .552-1.903 3.48 3.48 0 0 0-1.025-2.406 3.374 3.374 0 0 0-2.394-.983v-.005Z"
          />
        </svg>
      ),
      title: "Backend",
      info: "We support the most complex app idea with powerful backend architecture.Our team supports the most demanding application ideas with experiences in backend development.",
    },
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="82"
          height="51"
          fill="none"
        >
          <path
            fill="#2ECC82"
            d="M66.279 25.578v18c0 4.653-2.772 7.416-7.441 7.422H22.687c-4.573 0-7.374-2.785-7.38-7.33V7.34c0-4.551 2.797-7.33 7.358-7.33 12.052-.013 24.103-.013 36.154 0 4.681 0 7.45 2.756 7.46 7.403.008 6.06.008 12.114 0 18.165Zm-45.31-.067v14.5c0 3.436 1.877 5.313 5.322 5.32a7377.2 7377.2 0 0 0 29 0c3.438 0 5.31-1.887 5.316-5.326.014-9.665.014-19.332 0-29 0-3.436-1.88-5.313-5.322-5.32a7377.2 7377.2 0 0 0-29 0c-3.442 0-5.303 1.884-5.316 5.326-.016 4.831 0 9.669 0 14.5ZM5.88 14.434c-1.431 0-2.868.105-4.287-.051-.56-.06-1.054-.705-1.593-1.08.49-.377.972-1.056 1.476-1.072 2.868-.105 5.72-.105 8.575 0 .507.02 1.326.619 1.412 1.062.191.981-.657 1.147-1.466 1.147l-4.117-.006Zm69.905-.004c-1.482 0-2.974.083-4.443-.047-.462-.042-.87-.667-1.3-1.027.411-.389.813-1.102 1.236-1.115 3.015-.096 6.032-.096 9.05 0 .425 0 .826.74 1.237 1.134-.443.351-.866.957-1.338 1.004-1.47.134-2.96.051-4.442.051ZM5.835 38.84c-1.431 0-2.868.114-4.283-.055C1 38.72.522 38.03.009 37.625c.504-.347.995-.975 1.51-.995 2.856-.095 5.714-.095 8.573 0 .494.02.956.68 1.444 1.043-.472.389-.912 1.054-1.418 1.109-1.415.156-2.846.057-4.283.057Zm70.035-2.254c1.432 0 2.869-.096 4.284.054.507.054.956.708 1.418 1.087-.443.37-.876 1.045-1.329 1.058a137.85 137.85 0 0 1-8.89 0c-.45 0-.877-.685-1.317-1.052.462-.382.899-1.045 1.392-1.093 1.47-.147 2.961-.054 4.443-.054ZM5.688 22.535c-1.376 0-2.766.114-4.123-.054-.555-.07-1.033-.75-1.546-1.148.497-.357.988-.997 1.498-1.016a125.4 125.4 0 0 1 8.572 0c.494.019.956.685 1.45 1.051-.468.386-.908 1.058-1.412 1.11-1.465.152-2.957.057-4.439.057Zm69.988 0c-1.376 0-2.766.115-4.12-.054-.545-.07-1.01-.762-1.51-1.17.5-.347.994-.978 1.504-.994 2.868-.096 5.717-.099 8.572 0 .494.019.956.695 1.447 1.067-.481.383-.937 1.04-1.45 1.09-1.47.157-2.96.06-4.443.06ZM5.688 30.744c-1.43 0-2.868.099-4.283-.054-.497-.054-.93-.73-1.392-1.122.449-.36.889-1.017 1.348-1.033a141 141 0 0 1 8.888 0c.443 0 .86.692 1.29 1.062-.468.382-.908 1.042-1.412 1.09-1.465.156-2.957.06-4.439.057Zm70.008 0c-1.431 0-2.868.102-4.283-.054-.494-.054-.918-.733-1.374-1.125.446-.36.88-1.013 1.335-1.03a129.71 129.71 0 0 1 8.732 0c.5.02.975.702 1.463 1.075-.478.379-.924 1.032-1.434 1.083-1.466.147-2.958.051-4.44.051Z"
          />
          <path
            fill="#2ECC82"
            d="M40.87 43.093H26.385c-2.301 0-3.168-.873-3.171-3.187V11.09c0-2.3.87-3.168 3.187-3.187H55.21c2.301 0 3.171.87 3.187 3.187v28.816c0 2.301-.873 3.168-3.187 3.187-4.79.01-9.566 0-14.34 0Zm-5.028-14.398c1.418 0 2.798-.074 4.162.044.411.035.864.536 1.138.93.274.396.184.998.468 1.33.319.392.899.593 1.364.88.23-.495.755-1.071.638-1.467a328.31 328.31 0 0 0-3.825-12.457c-.159-.478-.956-.982-1.485-1.026a1.73 1.73 0 0 0-1.383.924A375.928 375.928 0 0 0 32.984 30.6c-.096.32.395 1.122.742 1.218.347.095 1.074-.29 1.275-.663.414-.714.56-1.571.841-2.46Zm11.903-4.233c0-2.02-.016-4.04 0-6.055 0-.86-.185-1.485-1.202-1.466-.956 0-1.051.66-1.048 1.422a1909.6 1909.6 0 0 1 0 12.11c0 .835.13 1.644 1.154 1.393.446-.109 1.01-.86 1.038-1.352.125-2.01.058-4.034.058-6.052Z"
          />
          <path
            fill="#2ECC82"
            d="M40.373 26.754H36.31l2.03-6.98a6349.53 6349.53 0 0 1 2.033 6.98Z"
          />
        </svg>
      ),
      title: "Artificial Intelligence",
      info: "Reach new business opportunities with our Artificial Intelligence services.We help you boost your product and get in-depth business insights with Data Science and Machine Learning.",
    },
  ];
  return (
    <div className="home__technologies">
      <img
        src={technologiesSvg}
        alt="technologiesSvg"
        className="home__technologies__img"
      />
      <div className="home__technologies__heading heading">
        Where Business meets cutting-edge Technology
      </div>
      <div className="home__technologies__info">
        Choose the tech stack for your next application, or let us pick the best
        solution for you
      </div>
      <div className="home__technologies__content">
        {techData.map((item, i) => (
          <HomeTechnologiesCard
            key={i}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}
