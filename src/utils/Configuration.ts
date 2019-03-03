class Configuration {
  /**
   * POSENET
   */
  public posenetImageScaleFactor: number = 0.6;
  public posenetMultiplier: number = 0.75;
  public posenetOutputStride: number = 16;

  /**
   * WEBCAM
   */
  public webcamVideoHeight: number = 600;
  public webcamVideoWidth: number = 800;

  /**
   * VIDEO
   */
  public videoReversed: boolean = false;

  /*
   * Socket
   */

  public socketHost: String = "https://dronie.vincentriva.fr";

  init() {
    console.log("Configuration inited");
  }
}

export default new Configuration();
