import style from './index.module.css';
function IndexUI(){
    return <>
        <div className={style.gridContainer}>
          <div className={style.boxLeft}>
            <div className={style.box}>
              <div>2020</div>
              <h1 style={{ margin: 0}}>Yaw, Records</h1>
              <div>Next Conciert</div>
              <div className={style.gridMiniContainer}>
                <h2>10.02.2020</h2>
                <h1 style={{ margin: 0}}>Wabba lab dab dab</h1>
                <div></div>
                <h1 style={{ margin: 0}}>Lorem ipsum dolor</h1>
                <h2>10.02.2020</h2>
                <h1>Tamo en vivo</h1>
                <h1></h1>
                <h1>Suena Portugal</h1>
                <h1></h1>
              </div>
            </div>
          </div>
          <div className={style.boxRight}><audio src="https://firebasestorage.googleapis.com/v0/b/yawrecords-77b5b.appspot.com/o/record%2Fcafune.mp3?alt=media&token=0e6e9cd3-b98f-4fb6-a50b-556aea094928" controls ></audio></div>
        </div>
    </>
}

export default IndexUI